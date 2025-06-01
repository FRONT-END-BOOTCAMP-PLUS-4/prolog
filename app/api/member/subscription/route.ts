
import { CancelFollowRequestDto } from '@/back/subscription/appilcation/dto/CancelFollowRequestDto';
import { CreateFollowRequestDto } from '@/back/subscription/appilcation/dto/CreateFollowRequestDto';
import { CancelFollowUsecase } from '@/back/subscription/appilcation/usecase/CancelFollowUsecase';
import { CreateFollowUsecase } from '@/back/subscription/appilcation/usecase/CreateFollowUsecase';
import { GetFollowersUsecase } from '@/back/subscription/appilcation/usecase/GetFollowersUsecase';
import { GetFollowingUsecase } from '@/back/subscription/appilcation/usecase/GetFollowingUsecase';
import { PrFollowRepository } from '@/back/subscription/infra/PrFollowRepository';
import { PrSubscriptionRepository } from '@/back/subscription/infra/PrSubscriptionRepository';
import { NextRequest, NextResponse } from 'next/server';
// 쿼리문에서 제어 가능할수도? 화이팅입니다 !
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('id');
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const repository = new PrSubscriptionRepository();

  const getFollowersUsecase = new GetFollowersUsecase(repository);
  const getFollowingUsecase = new GetFollowingUsecase(repository);
  const [followers, following] = await Promise.all([
    getFollowersUsecase.execute(userId),
    getFollowingUsecase.execute(userId),
  ]);
  return NextResponse.json({ followers, following });
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { isFollowing, prefix, id } = body;
    if (!prefix || !id) {
      return NextResponse.json(
        {
          success: false,
          error: 'requestId와 responseId는 필수 항목입니다.',
        },
        { status: 400 },
      );
    }
    if (id === prefix) {
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
      const dto = new CreateFollowRequestDto(id, prefix);
      const result = await createFollowUseCase.execute(dto);
      return NextResponse.json(result, { status: 201 });
    }
    if (isFollowing === false) {
      const repository = new PrFollowRepository();
      const cancelFollowUseCase = new CancelFollowUsecase(repository);
      const dto = new CancelFollowRequestDto(id, prefix);
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
