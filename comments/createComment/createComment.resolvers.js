import client from "../../client";
import { protectResolver } from "../../users/users.utility";

export default {
  Mutation: {
    createComment: protectResolver(
      async (_, { photoId, payload }, { loggedInUser }) => {
        const ok = await client.photo.findUnique({
          where: { id: photoId },
          select: { id: true },
        });
        if (!ok) {
          return {
            ok: false,
            error: "Photo not found",
          };
        }
        await client.comment.create({
          data: {
            payload,
            photo: {
              connect: {
                id: photoId,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
