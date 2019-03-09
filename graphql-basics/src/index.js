import {GraphQLServer} from "graphql-yoga";


//Type definition (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
    }
`

// Resolves
const resolvers = {
    Query: {
        hello() {
            return 'this is my first query';
        },
        name() {
            return 'my name is amr almagic';
        }
    }
}

const server = new GraphQLServer({
   typeDefs,
   resolvers
});

server.start(()=>{
    console.log('the server is up');
});