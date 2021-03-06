import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        // Check username or email are already on DB
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username/password is already taken");
        }

        // Hash Password
        const uglyPassword = await bcrypt.hash(password, 10);

        // save and return the user
        const createUser = await client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });
        if (createUser) {
          return {
            ok: true,
          };
        }
      } catch (e) {
        return {
          e,
          ok: false,
        };
      }
    },
  },
};
