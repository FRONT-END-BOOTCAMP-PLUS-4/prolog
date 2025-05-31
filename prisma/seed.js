import { PrismaClient } from '../app/generated/prisma/client.js';
const prisma = new PrismaClient();

async function main() {
  const userId = process.argv[2];

  if (!userId) {
    console.error('❌ UUID를 인자로 입력하세요');
    process.exit(1);
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  console.log(user);

  if (!user) {
    console.error('❌ 해당 UUID의 유저가 존재하지 않습니다.');
    process.exit(1);
  }

  // 테스트 유저생성
  await prisma.user.createMany({
    data: [
      {
        id: `${userId}test1`,
        name: `${user.name}임시유저1`,
        email: `${user}임시유저1@example.com`,
        createdAt: new Date(),
        provider: 'github',
      },
      {
        id: `${userId}test2`,
        name: `${user.name}임시유저2`,
        email: `${user}임시유저2@example.com`,
        createdAt: new Date(),
        provider: 'google',
      },
    ],
    skipDuplicates: true,
  });

  //  테스트유저 및 개인계정 카테고리 생성
  await prisma.category.createMany({
    data: [
      { name: 'React', createdAt: new Date(), userId: userId },
      { name: 'JavaScript', createdAt: new Date(), userId: userId },
      { name: 'Java', createdAt: new Date(), userId: userId },
      {
        name: `${userId}test1 카테고리`,
        createdAt: new Date(),
        userId: `${userId}test1`,
      },
      {
        name: `${userId}test2 카테고리`,
        createdAt: new Date(),
        userId: `${userId}test2`,
      },
    ],
    skipDuplicates: true,
  });

  // 테스트 유저 블로글 생성
  await prisma.blogPost.createMany({
    data: [
      {
        userId: `${userId}test1`,
        categoryId: null,
        title: `${userId}test1 글`,
        content: `
    ## React란?
    
    React는 **UI(User Interface)** 를 만들기 위한 JavaScript 라이브러리입니다.  
    Facebook에서 개발하였고, 현재는 전 세계적으로 널리 사용되고 있습니다.
    
    ### 주요 특징
    
    - 컴포넌트 기반 구조
    - Virtual DOM 사용
    - 단방향 데이터 흐름
    
    > React는 대규모 애플리케이션을 관리하기 쉽게 만들어줍니다.
        `,
        tags: [`${userId}test1`],
        aiSummary: null,
        createdAt: new Date(),
        isPublic: 1,
        thumbnailUrl: null,
        useAi: 0,
      },
      {
        userId: `${userId}test2`,
        categoryId: null,
        title: `${userId}test2 글`,
        content: `
    ## React란?
    
    React는 **UI(User Interface)** 를 만들기 위한 JavaScript 라이브러리입니다.  
    Facebook에서 개발하였고, 현재는 전 세계적으로 널리 사용되고 있습니다.
    
    ### 주요 특징
    
    - 컴포넌트 기반 구조
    - Virtual DOM 사용
    - 단방향 데이터 흐름
    
    > React는 대규모 애플리케이션을 관리하기 쉽게 만들어줍니다.
        `,
        tags: [`${userId}test2`],
        aiSummary: null,
        createdAt: new Date(),
        isPublic: 1,
        thumbnailUrl: null,
        useAi: 0,
      },
    ],
    skipDuplicates: true,
  });

  // 개인계정 블로그글 작성
  await prisma.blogPost.createMany({
    data: [
      {
        userId: userId,
        categoryId: null,
        title: 'react란?',
        content: `
    ## React란?
    
    React는 **UI(User Interface)** 를 만들기 위한 JavaScript 라이브러리입니다.  
    Facebook에서 개발하였고, 현재는 전 세계적으로 널리 사용되고 있습니다.
    
    ### 주요 특징
    
    - 컴포넌트 기반 구조
    - Virtual DOM 사용
    - 단방향 데이터 흐름
    
    > React는 대규모 애플리케이션을 관리하기 쉽게 만들어줍니다.
        `,
        tags: ['React', 'JavaScript', 'next', 'scss', 'ssr', 'csr', 'nextAuth'],
        aiSummary: '### AI요약입니다.',
        createdAt: new Date(),
        isPublic: 1,
        thumbnailUrl:
          'https://blog30-test.s3.ap-northeast-2.amazonaws.com/1748504936799_dclsx1.png',
        useAi: 1,
      },
      {
        userId,
        categoryId: null,
        title: 'JavaScript 얼마나 알고있나요?',
        content: `
  JavaScript는 웹을 움직이는 핵심 언어입니다.  
  초보자도 쉽게 접근할 수 있으며, 동적인 기능을 구현할 수 있습니다.
  
  - 비동기 처리 (async/await)
  - DOM 조작
  - 이벤트 기반 프로그래밍
        `,
        tags: ['javascript', 'beginner'],
        aiSummary: null,
        createdAt: new Date(),
        isPublic: 1,
        thumbnailUrl:
          'https://blog30-test.s3.ap-northeast-2.amazonaws.com/다운로드+(26).png',
        useAi: 0,
      },
      {
        userId,
        categoryId: null,
        title: 'Java 쓰지마세요',
        content: `
  Java는 오랜 역사를 가진 객체지향 프로그래밍 언어입니다.  
  웹, 모바일, 서버 애플리케이션 개발에 널리 사용됩니다.
  
  - JVM 기반
  - 강한 형식의 타입 시스템
  - Spring 프레임워크
        `,
        tags: ['java', 'spring'],
        aiSummary: '### AI요약입니다.',
        createdAt: new Date(),
        isPublic: 1,
        thumbnailUrl:
          'https://blog30-test.s3.ap-northeast-2.amazonaws.com/애비추.png',
        useAi: 0,
      },
    ],
    skipDuplicates: true,
  });

  const test1Post = await prisma.blogPost.findFirst({
    where: { title: `${userId}test1 글`},
    select: {id: true},
  })

  const test2Post = await prisma.blogPost.findFirst({
    where: { title: `${userId}test2 글`},
    select: {id: true},
  })

  await prisma.notification.createMany({
    data: [
      {
        postsId: test1Post.id,
        senderId: `${userId}test1`,
        receiverId: userId,
        type: 1,
        createdAt: new Date(),
        checkStatus: 0,
      },
      {
        postsId: test2Post.id,
        senderId: `${userId}test2`,
        receiverId: userId,
        type: 2,
        createdAt: new Date(),
        checkStatus: 0,
      },
    ],
    skipDuplicates: true,
  });

  console.log(`✅ Seeded categories for user: ${userId}`);
}

main();
