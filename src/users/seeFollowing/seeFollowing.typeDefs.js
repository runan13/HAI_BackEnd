import { gql } from "apollo-server";

export default gql`
  type SeeFollowIngResult {
    ok: Boolean!
    error: String
    following: [User]
  }
  type Query {
    seeFollowing(username: String!, lastId: Int): SeeFollowIngResult
  }
`;
