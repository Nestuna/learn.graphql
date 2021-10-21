import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resolvers =  {
    Query: {
        allUsers: () => prisma.user.findMany(),
        user: (_, args, __, ___) => prisma.user.findUnique({ where: { id: args.id } })
     }}

export default resolvers