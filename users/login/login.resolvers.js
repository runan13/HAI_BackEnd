import client from "../../client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      // Find user with args.username
      const user = await client.user.findFirst({ where: { username } });
      if (!user) {
        return { ok: false, error: "User not found" };
      }

      // check password with args.passwrod
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "Incorrect Password",
        };
      }

      // issue a token and send it to the user
      const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
