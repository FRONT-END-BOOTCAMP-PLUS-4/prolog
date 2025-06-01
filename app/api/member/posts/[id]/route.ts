import { UpdatePostUsecase } from '@/back/posts/application/usecases/UpdatePostUsecase';
import { PrPostUpdateRepository } from '@/back/posts/infra/PrPostUpdateRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const repository = new PrPostUpdateRepository();
    const updatePost = new UpdatePostUsecase(repository);

    const newPostWithId = {
      ...body,
      postId: Number(id),
    };

    const newPost = await updatePost.execute(newPostWithId);

    return NextResponse.json(
      { message: '게시글이 수정되었습니다.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('게시글 수정 오류:', error);
    return NextResponse.json(
      { error: '게시글 수정 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
