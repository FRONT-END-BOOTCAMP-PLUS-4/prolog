import { PrismaClient } from '../app/generated/prisma/client.js';
const prisma = new PrismaClient();

async function main() {
  const userId = process.argv[2];

  if (!userId) {
    console.error('❌ UUID를 인자로 입력하세요');
    process.exit(1);
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    console.error('❌ 해당 UUID의 유저가 존재하지 않습니다.');
    process.exit(1);
  }

  // 1. 알림 삭제
  await prisma.notification.deleteMany({
    where: {
      OR: [
        { senderId: `${userId}test1` },
        { senderId: `${userId}test2` },
        { receiverId: userId },
      ],
    },
  });

  // 2. 블로그 글 삭제
  await prisma.blogPost.deleteMany({
    where: {
      OR: [
        { userId: `${userId}test1` },
        { userId: `${userId}test2` },
        { userId: userId },
      ],
    },
  });

  // 3. 카테고리 삭제
  await prisma.category.deleteMany({
    where: {
      OR: [
        { userId: `${userId}test1` },
        { userId: `${userId}test2` },
        { userId: userId },
      ],
    },
  });

  // 4. 테스트 유저 삭제
  await prisma.user.deleteMany({
    where: {
      id: { in: [`${userId}test1`, `${userId}test2`] },
    },
  });

  console.log(`🧹 삭제 완료: 테스트 유저 및 ${userId} 관련 데이터`);
}

main();
