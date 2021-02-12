import client from "../../client";
import { protectResolver } from "../../users/users.utility";

export default {
  Mutation: {
    uploadSpo2: protectResolver(
      async (_, { minSpo2, maxSpo2 }, { loggedInUser }) => {
        console.log(minSpo2, maxSpo2, loggedInUser);
        return client.spo2.create({
          data: {
            minSpo2,
            maxSpo2,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
      }
    ),
  },
};
