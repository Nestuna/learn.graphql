import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userResolvers =  {
    Query: {
        allUsers: ():Promise<object> => prisma.user.findMany(),
        user: (_, args, __, ___):Promise<object> => prisma.user.findUnique({ where: { id: args.id } })
     },
    Mutation: {
        createUser: (_, args, __, ___):Promise<object> => prisma.user.create({ data: args.input })
    }
}

export default userResolvers