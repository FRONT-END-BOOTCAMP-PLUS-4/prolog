import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

import { CreatePostDto } from '@/back/posts/application/dto/CreatePostDto';
import { CreatePostUsecase } from '@/back/posts/application/usecases/CreatePostUsecase';
import { PrPostRepository } from '@/back/posts/infra/PrPostsRepository';
import { PrSubscribeRepository } from '@/back/subscribe/infra/PrSubscribeRepository';
import { PrNotificationRepository } from '@/back/notification/infra/PrNotificationRepository';

export async function POST(req: NextRequest) {
  try {
    const userData = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
    });

    if (!userData || !userData.sub) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = userData.sub;

    const body = await req.json();

    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json({
        message: '게시글 생성 중 오류가 발생했습니다.',
      });
    }

    const postDataWithUserId: CreatePostDto = {
      ...body,
      userId: userId,
    };

    const postRepository = new PrPostRepository();
    const subscribeRepository = new PrSubscribeRepository();
    const notificationRepository = new PrNotificationRepository();

    const createPostUsecase = new CreatePostUsecase(
      postRepository,
      subscribeRepository,
      notificationRepository,
    );
    const newPost = await createPostUsecase.execute(postDataWithUserId);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('게시글 생성 실패:', error);
    return NextResponse.json(
      { message: '게시글 생성 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
