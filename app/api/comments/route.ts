import { PrCommentRepository } from '@/back/comments/infra/PrCommentRepository';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    let userId: string | null = null;
    const userData = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (userData && userData.sub) {
      userId = userData.sub;
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
