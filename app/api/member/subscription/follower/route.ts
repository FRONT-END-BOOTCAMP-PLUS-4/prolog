import { GetFollowersUsecase } from '@/back/subscribe/application/usecases/GetFollowerUsecase';
import { PrSubscribeRepository } from '@/back/subscribe/infra/PrSubscribeRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId');
  const repository = new PrSubscribeRepository();
  const usecase = new GetFollowersUsecase(repository);
  const followerList = await usecase.execute(userId as string);
  return NextResponse.json(followerList);
}
