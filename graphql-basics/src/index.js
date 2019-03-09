import {GraphQLServer} from "graphql-yoga";


//Type definition (schema)
const typeDefs = `
     type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments: [Comment!]!
        me: User!
        post: Post!
    }
    
     type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        post: Post!
    }
`

// Resolves
const resolvers = {
    Query: {
        me() {
           return {
               id: '123',
               name: 'amr',
               email: 'ass@fr.com',
               age: 25
           }
        },
        post() {
            return {
                id: '092',
                title: 'GraphQL 101',
                body: '',
                published: false
            }
        }
    }
};

const server = new GraphQLServer({
   typeDefs,
   resolvers
});

server.start(()=>{
    console.log('the server is up');
});