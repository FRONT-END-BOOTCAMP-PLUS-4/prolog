import { NextRequest, NextResponse } from 'next/server';
import { PrToggleLikeRepository } from '@/back/like/infra/PrToggleLikeRepository';
import { ToggleLikeUseCase } from '@/back/like/application/usecase/ToggleLikeUsecase';

export async function POST(req: NextRequest) {
  const { userId, postId } = await req.json();
  if (!userId || !postId) {
    return NextResponse.json(
      { error: 'userId, postId required' },
      { status: 400 },
    );
  }

  const repo = new PrToggleLikeRepository();
  const usecase = new ToggleLikeUseCase(repo);

  try {
    const result = await usecase.execute({ userId, postId });
    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
