import { gql } from "apollo-server";

import Post from "../models/Post.js";

export const typeDefs = gql`
  type Query {
    getPosts: [Post]!
  }
`

export const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await Post.find({});
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}