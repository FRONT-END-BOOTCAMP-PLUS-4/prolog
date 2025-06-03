import { auth } from '@/app/(auth)/auth';
import { PrCommentRepository } from '@/back/comments/infra/PrCommentRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    let userId: string | null = null;

    const userData = await auth();

    if (userData && userData.user) {
      userId = userData.user.id!;
    }

    const { searchParams } = new URL(req.url);
    const postId = searchParams.get('postId');

    if (!postId) {
      return NextResponse.json({ message: '입력값 오류' }, { status: 400 });
    }

    const commentRepository = new PrCommentRepository();
    const comments = await commentRepository.findAllByPostId(
      Number(postId),
      userId,
    );

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error('댓글 조회 오류:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
