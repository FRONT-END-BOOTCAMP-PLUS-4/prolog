import { CreatePostDto } from '@/back/posts/application/dto/CreatePostDto';
import { CreatePostUsecase } from '@/back/posts/application/usecases/CreatePostUsecase';
import { PrPostRepository } from '@/back/posts/infra/PrPostsRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body: CreatePostDto = await req.json();

    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json({
        message: '게시글 생성 중 오류가 발생했습니다.',
      });
    }

    const repository = new PrPostRepository();
    const createPostUsecase = new CreatePostUsecase(repository);
    const newPost = await createPostUsecase.execute(body);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('게시글 생성 실패:', error);
    return NextResponse.json(
      { message: '게시글 생성 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
