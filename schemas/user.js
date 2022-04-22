import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    createdAt: String!
  }
`