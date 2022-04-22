import { ApolloServer } from "apollo-server";
import gql from 'graphql-tag'
import mongoose from 'mongoose'

import Post from './models/Post.js'
import {} from 'dotenv/config'


const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }

  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    createdAt: String!
  }

  type Query {
    getPosts: [Post]
  }
`

const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await Post.find({})
        return posts
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})


const connectionString = `mongodb+srv://fede:${process.env.DB_PASSWORD}@cluster9.lua1z.mongodb.net/merng?retryWrites=true&w=majority`


const connect = async () => {

  const databaseConnection = await mongoose.connect(connectionString)
  console.log(`Database Connected`)

  const {url} = await server.listen({ port: process.env.PORT || 4000 })
  console.log(`Server\'s running at ${url}`)

}

connect()

// mongoose.connect(connectionString)
//   .then(()=> {
//     server.listen({ port: process.env.PORT || 4000 })
//       .then(({ url }) => console.log(`Server running at ${url}`))
//   })

