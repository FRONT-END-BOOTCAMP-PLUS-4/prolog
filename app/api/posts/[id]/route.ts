import { GetPostUsecase } from '@/back/posts/application/usecases/GetPostUsecase';
import { PrPostRepository } from '@/back/posts/infra/PrPostsRepository';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    // 1. 로그인 시도 (토큰 없으면 undefined)
    const userData = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
    });

    // 2. 비로그인 시에도 허용, 로그인 시에는 userId 셋팅
    const currentUserId = userData?.sub ?? null;
    const postId = Number(params.id);

    const repository = new PrPostRepository();
    const getPostUsecase = new GetPostUsecase(repository);

    // 3. Usecase로 넘길 때 userId 없으면 null 넘김
    const post = await getPostUsecase.execute(postId, currentUserId);

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.', error: String(error) },
      { status: 500 },
    );
  }
}
