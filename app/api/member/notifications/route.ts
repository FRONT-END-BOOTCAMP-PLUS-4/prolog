import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { PrAlarmRepository } from '@/back/alarm/infra/PrAlarmRepository';
import { GetAlarmListUsecase } from '@/back/alarm/application/usecases/GetAlarmListUsecase';

export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });
  if(!token){
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }

  const prAlarmRepository = new PrAlarmRepository();
  const getAlarmListUsecase = new GetAlarmListUsecase(prAlarmRepository);
  const execute = await getAlarmListUsecase.execute(token.userId);

  return NextResponse.json({ status: 200 });
}
export async function POST() {}
