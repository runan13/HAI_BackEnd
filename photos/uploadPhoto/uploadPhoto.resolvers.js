import { hash } from "bcrypt";
import client from "../../client";
import { protectResolver } from "../../users/users.utility";
import { processHashtag } from "../photos.utility";

export default {
  Mutation: {
    uploadPhoto: protectResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        let hashtagObj = [];
        if (caption) {
          // parse caption\
          hashtagObj = processHashtag(caption);
          // get or create Hashtags
        }
        return client.photo.create({
          data: {
            file,
            caption,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            ...(hashtagObj.length > 0 && {
              hashtags: {
                connectOrCreate: hashtagObj,
              },
            }),
          },
        });
        // save photo with the parsed hashtags
        // add photo to the hashtags
      }
    ),
  },
};
