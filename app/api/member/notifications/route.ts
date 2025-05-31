import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { PrAlarmRepository } from '@/back/alarm/infra/PrAlarmRepository';
import { GetAlarmListUsecase } from '@/back/alarm/application/usecases/GetAlarmListUsecase';
import { PutAlarmCheckUsecase } from '@/back/alarm/application/usecases/PutAlarmCheckUsecase';

export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });
  if (!token) {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }

  try {
    const prAlarmRepository = new PrAlarmRepository();
    const getAlarmListUsecase = new GetAlarmListUsecase(prAlarmRepository);
    const execute = await getAlarmListUsecase.execute(token.userId);
    return NextResponse.json({ status: 200, data: execute });
  } catch (error) {
    console.log(error);
    // useCases Error 대기
    // infra Error 대기
  }
}

export async function PUT(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });
  if (!token) {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }

  try {
    const body = (await req.json() as {alarmId: number});
    const prAlarmRepository = new PrAlarmRepository();
    const putAlarmCheckUsecase = new PutAlarmCheckUsecase(prAlarmRepository);
    const execute= await putAlarmCheckUsecase.execute(token.userId, body.alarmId);
    return NextResponse.json({ status: 200, data: execute });
  } catch (error) {
    console.log(error);
    // useCases Error 대기
    // infra Error 대기
  }
}
