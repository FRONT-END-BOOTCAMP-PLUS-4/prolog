import { auth } from '@/app/(auth)/auth';
import { CancelFollowRequestDto } from '@/back/subscribe/application/dto/CancelFollowRequestDto';
import { CreateFollowRequestDto } from '@/back/subscribe/application/dto/CreateFollowRequestDto';
import { CancelFollowUsecase } from '@/back/subscribe/application/usecases/CancelFollowUsecase';
import { CheckFollowStatusUsecase } from '@/back/subscribe/application/usecases/CheckFollowStatusUsecase';
import { CreateFollowUsecase } from '@/back/subscribe/application/usecases/CreateFollowUsecase';
import { PrFollowRepository } from '@/back/subscribe/infra/PrFollowRepository';

import { NextRequest, NextResponse } from 'next/server';
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('id');
  const currentUserId = request.nextUrl.searchParams.get('currentUserId');
  const repository = new PrFollowRepository();
  const usecase = new CheckFollowStatusUsecase(repository);
  const checkFollow = await usecase.execute(
    currentUserId as string, // 팔로우 요청자
    userId as string, // 팔로우 대상
  );
  return NextResponse.json(checkFollow);
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { isFollowing, userId } = body;
    const session = await auth();
    const id = session?.user.id;
    if (!userId || !id) {
      return NextResponse.json(
        {
          success: false,
          error: 'requestId와 responseId는 필수 항목입니다.',
        },
        { status: 400 },
      );
    }
    if (id === userId) {
      return NextResponse.json(
        {
          success: false,
          error: '자기 자신을 팔로우할 수 없습니다.',
        },
        { status: 400 },
      );
    }
    if (isFollowing === true) {
      const repository = new PrFollowRepository();
      const createFollowUseCase = new CreateFollowUsecase(repository);
      const dto = new CreateFollowRequestDto(id, userId);
      const result = await createFollowUseCase.execute(dto);
      return NextResponse.json(result, { status: 201 });
    }
    if (isFollowing === false) {
      const repository = new PrFollowRepository();
      const cancelFollowUseCase = new CancelFollowUsecase(repository);
      const dto = new CancelFollowRequestDto(id, userId);
      const result = await cancelFollowUseCase.execute(dto);
      return NextResponse.json(result, { status: 201 });
    }
  } catch (error) {
    console.error('API Error:', error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : '서버 내부 오류가 발생했습니다.',
      },
      { status: 500 },
    );
  }
}
