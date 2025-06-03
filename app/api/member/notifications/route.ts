import { NextRequest, NextResponse } from 'next/server';

import { PrAlarmRepository } from '@/back/alarm/infra/PrAlarmRepository';
import { GetAlarmListUsecase } from '@/back/alarm/application/usecases/GetAlarmListUsecase';
import { PutAlarmCheckUsecase } from '@/back/alarm/application/usecases/PutAlarmCheckUsecase';
import { DeleteAlarmUsecase } from '@/back/alarm/application/usecases/DeleteAlarmUseCase';
import { auth } from '@/app/(auth)/auth';

export async function GET(req: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }

  const userId = session.user.id!;

  try {
    const prAlarmRepository = new PrAlarmRepository();
    const getAlarmListUsecase = new GetAlarmListUsecase(prAlarmRepository);
    const execute = await getAlarmListUsecase.execute(userId);
    return NextResponse.json({ status: 200, data: execute });
  } catch (error) {
    console.log(error);
    // useCases Error 대기
    // infra Error 대기
  }
}

export async function PUT(req: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }

  const userId = session.user.id!;

  try {
    const body = await req.json();
    const prAlarmRepository = new PrAlarmRepository();
    const putAlarmCheckUsecase = new PutAlarmCheckUsecase(prAlarmRepository);
    const execute = await putAlarmCheckUsecase.execute(userId, body);

    return NextResponse.json({ status: 200, data: execute });
  } catch (error) {
    console.log(error);
    // useCases Error 대기
    // infra Error 대기
  }
}

export async function DELETE(req: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ status: 401, message: 'Unauthorized' });
  }

  const userId = session.user.id!;

  try {
    const body = await req.json();
    const prAlarmRepository = new PrAlarmRepository();
    const deleteAlarmUsecase = new DeleteAlarmUsecase(prAlarmRepository);
    const execute = await deleteAlarmUsecase.execute(body, userId);
    return NextResponse.json({ status: 200, data: execute });
  } catch (error) {
    console.log(error);
    // useCases Error 대기
    // infra Error 대기
  }
}
