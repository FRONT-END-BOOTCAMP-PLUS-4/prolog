import { NextRequest, NextResponse } from 'next/server';
import { PrCommentRepository } from '@/back/comments/infra/PrCommentRepository';
import { GetCommentCountUsecase } from '@/back/comments/application/usecases/GetCommentCountUsecase';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get('postId');

    if (!postId) {
      return NextResponse.json(
        { message: 'postId is required' },
        { status: 400 },
      );
    }

    const commentRepository = new PrCommentRepository();
    const usecase = new GetCommentCountUsecase(commentRepository);

    const count = await usecase.execute(Number(postId));

    return NextResponse.json({ count });
  } catch (error) {
    console.error('댓글 수 조회 오류:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
