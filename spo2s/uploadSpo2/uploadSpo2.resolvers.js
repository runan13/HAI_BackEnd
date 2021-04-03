import client from "../../client";
import axios from "axios";
import { protectResolver } from "../../users/users.utility";

export default {
  Mutation: {
    uploadSpo2: protectResolver(async (_, { username }, { loggedInUser }) => {
      // 테스트용 JSON Data
      const testJson = {
        username: "KSJ",
        datatime: "2021-03-26",
        spo2_data: {
          spo2: [44.12, 93.34, 49.98, 97.97, 99.81, 90.52, 25.66],
        },
        bp_data: {
          bp: [
            [126, 126, 131, 122, 116, 116, 116, 115, 120, 121],
            [78, 78, 73, 78, 71, 72, 72, 71, 76, 77],
          ],
        },
      };
      // SpO2 Data 90 미만 제거 후 평균 계산
      let spo2Sum = 0;
      let spo2ValueCount = 0;
      const testavgspo2 = testJson.spo2_data.spo2.map((sp) => {
        if (sp > 90) {
          spo2ValueCount++;
          spo2Sum += sp;
          return spo2Sum;
        }
      });
      console.log("가공 전 SpO2 배열 : ", testJson.spo2_data.spo2);
      console.log("--- SpO2 Data 90 미만 제거 후 평균값 가공 ---");
      console.log(
        "가공 후 SpO2 평균값 : ",
        parseInt(testavgspo2 / spo2ValueCount)
      );
      // bp 상위 5개 값 평균 계산하기
      const sortBp = (a, b) => b - a;
      const arrayAverage = (arr) => {
        var sum = 0;
        var numbersCnt = 0;
        if (arr?.length <= 5) {
          numbersCnt = arr?.length - 2;
        } else {
          numbersCnt = 5;
        }
        for (var i in arr) {
          sum += arr[i];
        }
        return sum / numbersCnt;
      };
      const bpUpSort = testJson.bp_data.bp[0].sort(sortBp);
      const bpDownSort = testJson.bp_data.bp[1].sort(sortBp);
      console.log("--- 가공전 BP 배열 ---");
      console.log(bpUpSort);
      console.log(bpDownSort);
      const deleteArray = (arr) => {
        const count = arr?.length;
        if (count <= 5) {
          delete arr[0];
          delete arr[count - 1];
          console.log("--- BP 배열 5개 미만일때 최고, 최저값 제거 ---");
          console.log("BP값 5개 미만일 때 가공 후 BP배열 : ", arr);
          return arr;
        } else {
          delete arr[0];
          const deleteNum = count - 5;
          for (var i = 1; i < deleteNum; i++) {
            delete arr[count - i];
          }
          console.log(
            "--- BP 배열 5개 이상일때 최고, 최저값 제거, 상위 5개값 ---"
          );
          console.log("BP값 5개 이상일 때 가공 후 BP 배열", arr);
          return arr;
        }
      };
      console.log(parseInt(arrayAverage(deleteArray(bpUpSort))));
      console.log(parseInt(arrayAverage(deleteArray(bpDownSort))));
      // 원복 지점
      if (username === loggedInUser.username) {
        const spo2API = axios.create({
          baseURL: "http://172.20.10.6:5555/app",
        });
        const getSpo2 = () => spo2API.get(`/spo2`);

        const { data: spo2 } = await getSpo2();
        const bpUp = spo2.bp_data.bp[0].map((bp) => parseInt(bp));
        const bpDown = spo2.bp_data.bp[1].map((bp) => parseInt(bp));

        return client.spo2.create({
          data: {
            minSpo2: spo2.min_spo2,
            maxSpo2: spo2.max_spo2,
            avgSpo2: spo2.avg_spo2,
            bpUp: bpUp,
            bpDown: bpDown,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
      }
    }),
  },
};
