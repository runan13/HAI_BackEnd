import { gql } from "apollo-server";

export default gql`
  type Spo2 {
    id: String!
    maxSpo2: String!
    minSpo2: String!
    ownUser: [User]!
    createdAt: String!
  }
`;
