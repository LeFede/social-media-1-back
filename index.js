import { ApolloServer } from "apollo-server-express";
import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`

const resolvers = {
  
}
