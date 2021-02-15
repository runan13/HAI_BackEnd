import { gql } from "apollo-server";

export default gql`
  type DeleteSpo2Result {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteSpo2(id: Int): DeleteSpo2Result!
  }
`;
