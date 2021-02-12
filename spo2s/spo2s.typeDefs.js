import { gql } from "apollo-server";

export default gql`
  type Spo2 {
    id: Int!
    user: User!
    minSpo2: String!
    maxSpo2: String!
    createdAt: String!
  }
`;
