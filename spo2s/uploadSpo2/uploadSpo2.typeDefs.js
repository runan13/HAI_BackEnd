import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadSpo2(username: String!): Spo2
  }
`;
