require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const PORT = process.env.PORT;

const server = new ApolloServer({
  schema,
  context: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjEyMzMyMDQxfQ.NnlCo5lzB_Kf76xTNmDdhisbwxY9-SmWxps61bStqi8",
  },
});

server
  .listen(PORT)
  .then(() =>
    console.log(` ✅ Server is Running on http://localhost:${PORT}/`)
  );
