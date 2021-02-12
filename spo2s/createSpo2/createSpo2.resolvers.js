import axios from "axios";
import client from "../../client";
import { getSpo2 } from "../spo2.utility";

export default {
  Mutation: {
    createSpo2: async (_, { username }, { loggedInUser }) => {
      if (loggedInUser.username !== username) {
        return {
          ok: false,
          error: "Please Log In do this Action",
        };
      }
      const api = axios.create({
        baseURL: "http://220.127.129.66:8080/app/",
      });

      const getSpo2 = () => api.get(`/${loggedInUser.username}2021-02-09`);

      const { data } = await getSpo2();
      console.log(loggedInUser);

      return client.spo2.create({
        data: {
          maxSpo2: toString(data.max_spo2),
          minSpo2: toString(data.min_spo2),
        },
      });
    },
  },
};
