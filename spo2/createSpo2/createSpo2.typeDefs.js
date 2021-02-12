import { gql } from "apollo-server";

export default gql`
  type CreateSpo2Result {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createSpo2(username: String!): CreateSpo2Result!
  }
`;
