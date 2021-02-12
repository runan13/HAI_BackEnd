import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadSpo2(minSpo2: String!, maxSpo2: String!): Spo2
  }
`;
