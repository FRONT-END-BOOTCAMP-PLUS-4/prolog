import { PrismaClient } from '@/app/generated/prisma';
const prisma = new PrismaClient();
export default prisma;
// const userModel = {
//     user: {
//       async findActiveByEmail(email: string) {
//         return ""
//       },
//     },
//   };
  
//   const postModel = {
//     post: {
//       async findPublished() {
//         return prisma.$queryRaw`SELECT * FROM "User" WHERE email = ${email}`;
//       },
//     },
//   };
  

// const prisma = new PrismaClient().$extends({
//     name: 'custom-models',
//     model: {

//     }
// });

