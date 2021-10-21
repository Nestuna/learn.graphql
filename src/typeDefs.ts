import { gql } from 'apollo-server';

const typeDefs = gql `
    type User {
        id: Int!
        email: String
        password: String
        firstName: String
        lastName: String
        posts: [Post]
    }
    type Post {
        id: Int
        authorId: Int
        postId: Int
        comments: [Post]
        content: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        allUsers: [User],
        user(id: Int!): User
    }

`

export default typeDefs;