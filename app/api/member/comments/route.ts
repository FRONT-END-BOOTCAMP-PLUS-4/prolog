import { auth } from '@/app/(auth)/auth';
import { CreateCommentDto } from '@/back/comments/application/dto/CreateCommentDto';
import { CreateCommentUsecase } from '@/back/comments/application/usecases/CreateCommentUsecase';
import { PrCommentRepository } from '@/back/comments/infra/PrCommentRepository';
import { PrNotificationRepository } from '@/back/notification/infra/PrNotificationRepository';
import { PrPostRepository } from '@/back/posts/infra/PrPostsRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id!;

    const { postId, content } = await req.json();

    if (!postId || !content) {
      return NextResponse.json({ message: '입력값 오류' }, { status: 400 });
    }

    const commentRepository = new PrCommentRepository();
    const postsRepository = new PrPostRepository();
    const notificationRepository = new PrNotificationRepository();
    const usecase = new CreateCommentUsecase(
      commentRepository,
      postsRepository,
      notificationRepository,
    );

    const dto = new CreateCommentDto(userId, postId, content);
    const comment = await usecase.execute(dto);

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('댓글 작성 오류:', error);
    return NextResponse.json({ message: '서버 오류' }, { status: 500 });
  }
}
