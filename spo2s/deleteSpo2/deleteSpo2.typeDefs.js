import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteSpo2(id: Int): MutationResponse!
  }
`;
