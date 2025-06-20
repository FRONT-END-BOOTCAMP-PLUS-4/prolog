import { GetFollowingUsecase } from '@/back/subscribe/application/usecases/GetFollowingUsecase';
import { PrSubscribeRepository } from '@/back/subscribe/infra/PrSubscribeRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId');
  const repository = new PrSubscribeRepository();
  const usecase = new GetFollowingUsecase(repository);
  const followList = await usecase.execute(userId as string);

  return NextResponse.json(followList);
}
