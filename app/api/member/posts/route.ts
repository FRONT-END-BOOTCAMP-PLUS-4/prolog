import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/app/(auth)/auth';

import { CreatePostDto } from '@/back/posts/application/dto/CreatePostDto';
import { CreatePostUsecase } from '@/back/posts/application/usecases/CreatePostUsecase';
import { PrPostRepository } from '@/back/posts/infra/PrPostsRepository';
import { PrNotificationRepository } from '@/back/notification/infra/PrNotificationRepository';
import { PrSubscribePostRepository } from '@/back/subscribe/infra/PrSubscribePostRepository';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

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
    const subscribeRepository = new PrSubscribePostRepository();
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
