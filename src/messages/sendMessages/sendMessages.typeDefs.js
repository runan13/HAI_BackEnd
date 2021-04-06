import { gql } from "apollo-server";

export default gql`
  type Mutation {
    sendMessages(payload: String!, roomId: Int, userId: Int): MutationResponse!
  }
`;
