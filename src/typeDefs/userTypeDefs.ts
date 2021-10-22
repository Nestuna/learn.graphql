import { gql } from 'apollo-server';

const userTypeDefs = gql `
    type User {
        id: Int!
        email: String
        password: String
        firstName: String
        lastName: String
        posts: [Post]
    }

    input UserInput {
        email: String
        password: String
        firstName: String
        lastName: String
    }

    type Query {
        allUsers: [User],
        user(id: Int!): User
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

export default userTypeDefs;