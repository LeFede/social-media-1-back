import { ApolloServer } from "apollo-server";
import mongoose from 'mongoose'

import { typeDefs as PostSchema } from "./schemas/post.js";
import { typeDefs as QuerySchema, 
  resolvers as QueryResolver} from './schemas/query.js'

import {} from 'dotenv/config'

const server = new ApolloServer({
  typeDefs: [ PostSchema , QuerySchema ],
  resolvers: [ QueryResolver ]
})


const connectionString = `mongodb+srv://fede:${process.env.DB_PASSWORD}@cluster9.lua1z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const connect = async () => {
  await mongoose.connect(connectionString)
  console.log(`Database Connected`)

  const {url} = await server.listen({ port: process.env.PORT || 4000 })
  console.log(`Server\'s running at ${url}`)
}

connect()

