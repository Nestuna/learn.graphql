import { gql } from 'apollo-server';

const postTypeDefs = gql `
    type Post {
        id: Int
        authorId: Int
        postId: Int
        comments: [Post]
        content: String
        createdAt: String
        updatedAt: String
    }

    input PostInput {
        authorId: Int
        postId: Int
        content: String
    }

    type Query {
        allPosts: [Post],
        post(id: Int!): Post,
        allPostComments(postId: Int!): [Post],
        comment(postId: Int, commentId: Int!): Post
    }

    type Mutation {
        createPost(input: PostInput): Post
        updatePost(id: Int!, input: PostInput): Post
        deletePost(id: Int!): Post
        createPostComment(input: PostInput): Post,
        updatePostComment(commentId: Int!, input: PostInput): Post,
        deletePostComment(commentId: Int!): Post
    }
`
export default postTypeDefs;
