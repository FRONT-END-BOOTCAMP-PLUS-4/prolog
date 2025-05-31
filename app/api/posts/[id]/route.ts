import { GetPostUsecase } from '@/back/posts/application/usecases/GetPostUsecase';
import { PrPostRepository } from '@/back/posts/infra/PrPostsRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const postId = 1; // 예시로 고정된 ID 사용, 실제로는 URL 파라미터에서 가져와야 함

    const repository = new PrPostRepository();
    const getPostUsecase = new GetPostUsecase(repository);
    const post = await getPostUsecase.execute(postId);

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('게시글 불러오기 오류:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
