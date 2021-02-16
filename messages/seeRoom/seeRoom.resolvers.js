import client from "../../client";
import { protectResolver } from "../../users/users.utility";

export default {
  Query: {
    seeRoom: protectResolver(async (_, { id }, { loggedInUser }) =>
      client.room.findUnique({
        where: {
          id,
          users: {
            some: {
              id: loggedInUser.id,
            },
          },
        },
      })
    ),
  },
};
