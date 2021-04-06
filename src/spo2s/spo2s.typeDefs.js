import { gql } from "apollo-server";

export default gql`
  type Spo2 {
    id: Int!
    user: User!
    minSpo2: Float!
    avgSpo2: Float!
    maxSpo2: Float!
    avgSpo2_Sort: Int
    bpUp: [Int]
    bpUp_Sort: Int
    bpDown: [Int]
    bpDown_Sort: Int
    createdAt: String!
    isMine: Boolean!
  }
`;
