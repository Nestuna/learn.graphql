import { ApolloServer } from "apollo-server";
import typeDefs from './typeDefs';
import resolvers from './resolvers';


const server = new ApolloServer({ typeDefs, resolvers });


const showWelcomeMessage = (url: string): void => {
    console.log(`🚀  Server ready at ${url}`);
}

server.listen().then(({ url }) => {
    showWelcomeMessage(url);
});