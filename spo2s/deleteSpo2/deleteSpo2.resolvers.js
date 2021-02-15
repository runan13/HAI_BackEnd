import client from "../../client";
import { protectResolver } from "../../users/users.utility";

export default {
  Mutation: {
    deleteSpo2: protectResolver(async (_, { id }, { loggedInUser }) => {
      const spo2 = await client.spo2.findUnique({
        where: { id },
        select: { userId: true },
      });
      if (!spo2) {
        return {
          ok: false,
          error: "Spo2 not found",
        };
      } else if (spo2.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "Not authorized",
        };
      } else {
        await client.spo2.delete({ where: { id } });
        return {
          ok: true,
        };
      }
    }),
  },
};
