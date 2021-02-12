import { gql } from "apollo-server";

export default gql`
  type Query {
    seeSpo2(id: Int): Spo2
  }
`;
