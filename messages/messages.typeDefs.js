import { gql } from "apollo-server";

export default gql`
  type Messages {
    id: Int!
    payload: String!
    user: User!
    room: Room!
    createdAt: String!
    updatedAt: String!
  }
  type Room {
    id: Int!
    users: [User]
    messages: [Messages]
    createdAt: String!
    updatedAt: String!
  }
`;
