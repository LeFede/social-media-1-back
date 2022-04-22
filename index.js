import { ApolloServer } from "apollo-server";
import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`

const resolvers = {
  Query: {
    sayHi: () => 'Hello World' 
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen({ port: process.env.PORT  || 4000 })
  .then(({url}) => console.log(`Server running at ${url}`))
