import client from "../../client";
import { protectResolver } from "../../users/users.utility";

export default {
  Query: {
    seeRooms: protectResolver(
      async (_, __, { loggedInUser }) =>
        await client.room.findMany({
          where: {
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
