import client from "../client";

export default {
  Spo2: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    isMine: ({ userId }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return userId === loggedInUser.id;
    },
  },
};
