import { gql } from "apollo-server";

export default gql`
  type Messages {
    id: Int!
    payload: String!
    user: User!
    room: Room!
    read: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  type Room {
    id: Int!
    unreadTotal: Int!
    users: [User]
    messages: [Messages]
    createdAt: String!
    updatedAt: String!
  }
`;
