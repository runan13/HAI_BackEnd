import { gql } from "apollo-server";

export default gql`
  type FollowUerResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    followUser(username: String): FollowUerResult
  }
`;
