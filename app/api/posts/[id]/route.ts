import { GetPostUsecase } from '@/back/posts/application/usecases/GetPostUsecase';
import { PrPostRepository } from '@/back/posts/infra/PrPostsRepository';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const userData = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
    });

    if (!userData || !userData.sub) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const currentUserId = userData.sub;
    const postId = Number(params.id);

    const repository = new PrPostRepository();
    const getPostUsecase = new GetPostUsecase(repository);

    const post = await getPostUsecase.execute(postId, currentUserId);

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('게시글 불러오기 오류:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.', error: String(error) },
      { status: 500 },
    );
  }
}
