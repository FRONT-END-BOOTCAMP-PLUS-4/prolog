import { GetFollowersUsecase } from '@/back/subscribe/application/usecases/GetFollowerUsecase';
import { PrSubscriptionRepository } from '@/back/subscribe/infra/PrSubscribeRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId');
  const repository = new PrSubscriptionRepository();
  const usecase = new GetFollowersUsecase(repository);
  const followerList = await usecase.execute(userId as string);
  return NextResponse.json(followerList);
}
