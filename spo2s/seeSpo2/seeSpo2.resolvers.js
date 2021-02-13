import client from "../../client";
import { protectResolver } from "../../users/users.utility";

export default {
  Query: {
    seeSpo2: protectResolver(async (_, __, { loggedInUser }) =>
      client.spo2.findMany({
        where: {
          userId: loggedInUser.id,
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    ),
  },
};
