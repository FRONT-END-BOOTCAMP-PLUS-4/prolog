import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

import { GetFollowerUsecase } from '@/back/subscribe/application/usecases/GetFollowerUsecase';
import { PrSubscribeRepository } from '@/back/subscribe/infra/PrSubscribeRepository';

export async function GET(req: NextRequest) {
  try {
    const userData = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
    });

    if (!userData || !userData.sub) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = userData.sub;

    const repository = new PrSubscribeRepository();
    const getFollowerList = new GetFollowerUsecase(repository);

    const followerList = await getFollowerList.execute(userId);

    return NextResponse.json({ data: followerList });
  } catch (error) {
    console.error('팔로우 리스트 불러오기 오류:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

// 쿼리문에서 제어 가능할수도? 화이팅입니다 !
export async function POST() {}
