import client from "../../client";
import axios from "axios";
import { protectResolver } from "../../users/users.utility";

export default {
  Mutation: {
    uploadSpo2: protectResolver(async (_, { username }, { loggedInUser }) => {
      // 배열 미정렬 평균 함수
      const arrayAverage = (arr) => {
        var sum = 0;
        for (var i in arr) {
          sum += arr[i];
        }
        var numbersCnt = arr?.length;
        return sum / numbersCnt;
      };
      // 배열 정렬 함수
      const sortArray = (a, b) => b - a;

      // SpO2 Data 90 미만 제거 후 평균 계산
      const refactoringSpo2 = (arr) => {
        const spo2Sort = arr?.sort(sortArray);
        const count = spo2Sort.length;
        var spo2ValueCount = 0;
        var spo2Sum = 0;
        if (count <= 5) {
          delete spo2Sort[0];
          delete spo2Sort[count - 1];
          console.log(spo2Sort);
          for (var i = 0; i < count; i++) {
            if (spo2Sort[i] > 89) {
              spo2Sum += spo2Sort[i];
              spo2ValueCount++;
            }
          }
          return parseInt(spo2Sum / spo2ValueCount);
        } else {
          delete spo2Sort[0];
          const deleteNum = count - 5;
          for (var i = 1; i < deleteNum; i++) {
            delete arr[count - i];
          }
          for (var i = 0; i < 5; i++) {
            if (spo2Sort[i] > 89) {
              spo2Sum += spo2Sort[i];
              spo2ValueCount++;
            }
          }
          return parseInt(spo2Sum / spo2ValueCount);
        }
      };
      /*
      // bp 상위 5개 값 평균 계산하기
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
      const bpUpSort = testJson.bp_data.bp[0].sort(sortArray);
      const bpDownSort = testJson.bp_data.bp[1].sort(sortArray);
      console.log("--- 가공전 BP 배열 ---");
      console.log(bpUpSort);
      console.log(bpDownSort);
      const refactoringBP = (arr) => {
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
      console.log(parseInt(arrayAverage(refactoringBP(bpUpSort))));
      console.log(parseInt(arrayAverage(refactoringBP(bpDownSort))));
      */
      // 원복 지점
      if (username === loggedInUser.username) {
        const spo2API = axios.create({
          baseURL: "http://49.161.233.162:5555/app",
        });
        const getSpo2 = () => spo2API.get(`/spo2`);

        const { data: spo2 } = await getSpo2();
        const bpUp = spo2.bp_data.bp[0].map((bp) => parseInt(bp));
        const bpDown = spo2.bp_data.bp[1].map((bp) => parseInt(bp));
        const bpUp_Sort = Math.ceil(arrayAverage(bpUp));
        const bpDown_Sort = Math.ceil(arrayAverage(bpDown));

        // 연동 후 변수 들어갈 위치
        // 임시 변수
        const avgSpo2_Sort = refactoringSpo2(spo2?.spo2_data?.spo2);

        return client.spo2.create({
          data: {
            minSpo2: spo2.min_spo2,
            maxSpo2: spo2.max_spo2,
            avgSpo2: spo2.avg_spo2,
            avgSpo2_Sort: avgSpo2_Sort,
            bpUp: bpUp,
            bpUp_Sort: bpUp_Sort,
            bpDown: bpDown,
            bpDown_Sort: bpDown_Sort,
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
