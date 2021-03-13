import client from "../../client";
import axios from "axios";
import { protectResolver } from "../../users/users.utility";

export default {
  Mutation: {
    uploadSpo2: protectResolver(async (_, { username }, { loggedInUser }) => {
      console.log(username);
      if (username === loggedInUser.username) {
        const spo2API = axios.create({
          baseURL: "http://49.161.233.162:8080/app/",
        });
        const getSpo2 = () =>
          spo2API.get(`/${loggedInUser.username}2021-03-13`);

        const { data: spo2 } = await getSpo2();

        return client.spo2.create({
          data: {
            minSpo2: spo2.max_spo2,
            maxSpo2: spo2.min_spo2,
            avgSpo2: spo2.avg_spo2,
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
