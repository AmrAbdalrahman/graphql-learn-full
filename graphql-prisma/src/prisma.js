import {Prisma} from 'prisma-binding';

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'https://eu1.prisma.sh/amr-ahmed-00564b/graphql-prisma/dev'
});




// //prisma query
//
// prisma.query.users(null, '{id name email posts {id title}}').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
// });
//
// prisma.query.comments(null, '{id text author {id name}}').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
// });


// //prisma mutation
// prisma.mutation.createPost({
//     data: {
//         title: "my new graphql 22",
//         body: "",
//         published: false,
//         author: {
//             connect: {
//                 id: "cjtopg0g3k2lr0b91cedo19vv"
//             }
//         }
//     }
// }, '{id title body published}').then((data) => {
//     console.log(data);
//   return  prisma.query.users(null, '{id name posts {id title}}')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation.updatePost({
//     where: {
//         id: "cjtoqdskbk9my0b91wlvdkx2a"
//     },
//     data: {
//         body: "add body text...",
//         published: true
//     }
// }, '{id}').then((data) => {
//     return prisma.query.posts(null, '{id title body published}')
// }).then((data) => {
//     console.log(data);
// });


