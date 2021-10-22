import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const postResolvers =  {
    Query: {
        allPosts: ():Promise<object> => prisma.post.findMany(),
        post: (_, args, __, ___):Promise<object> => {
            const id:number = args.id!;
            return prisma.post.findUnique({ where: { id } });
        },
        allPostComments: (_, args, __, ___):Promise<object> => {
            const postId:number = args.postId!;
            return prisma.post.findMany({ where: { postId }})
        },
        comment: (_, args, __, ___):Promise<object> => {
            const id:number = args.id!;
            return prisma.post.findUnique({ where: { id } });
        }
    },
    Mutation: {
        createPost: (_, args, __, ___):Promise<object> => {
            args.input.createdAt = new Date();
            return prisma.post.create({ data:  args.input })
        },
        updatePost: (_, args, __, ___):Promise<object> => {
            const id:number = args.id!;
            args.input.updatedAt = new Date()
            return prisma.post.update({
                where: { id },
                data : args.input
            })
        },
        deletePost: (_, args, __, ___):Promise<object> => {
            const id:number = args.id!;
            return prisma.post.delete({ where: { id } })
        },
        createPostComment: (_, args, __, ___):Promise<object> | object => {
            if (args.input.postId != null) {
                args.input.createdAt = new Date();
                return prisma.post.create({ data:  args.input })
            } else {
                return { content: 'Error: No post ID provided for creating comment' };
            }
        },
        updatePostComment: (_, args, __, ___):Promise<object> | object => {
            if (args.input.postId != null) {
                const id:number = args.id!;
                args.input.updatedAt = new Date()
                return prisma.post.update({
                    where: { id },
                    data : args.input
                })
            } else {
                return { content: 'Error: No post ID provided for updating comment' };
            }
        },
        deletePostComment: (_, args, __, ___):Promise<object> => {
            const id:number = args.commentId!;
            return prisma.post.delete({ where: { id } })
        }

    }
}

export default postResolvers;