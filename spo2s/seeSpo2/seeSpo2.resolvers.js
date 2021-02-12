import { UserInputError } from "apollo-server";
import client from "../../client";
import { protectResolver } from "../../users/users.utility";

export default {
  Query: {
    seeSpo2: protectResolver(async (_, { id }, { loggedInUser }) => {
      const spo2 = await client.spo2.findUnique({
        where: {
          id,
        },
      });

      if (spo2.userId === loggedInUser.id) {
        return client.spo2.findUnique({
          where: {
            id,
          },
        });
      }
    }),
  },
};
