import { gql } from "apollo-server";

export default gql`
  type Spo2 {
    id: Int!
    user: User!
    minSpo2: Float!
    avgSpo2: Float!
    maxSpo2: Float!
    bpUp: [Int]
    bpDown: [Int]
    createdAt: String!
    isMine: Boolean!
  }
`;
