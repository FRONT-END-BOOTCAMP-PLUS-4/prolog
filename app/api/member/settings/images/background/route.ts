import { NextRequest, NextResponse } from 'next/server';
import { getSettingUseCase } from '@/back/setting/infra/_factory';
import { auth } from '@/app/(auth)/auth';

export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 },
      );
    }
    const result = await getSettingUseCase().removeBackgroundImage(
      session.user.id,
    );
    return NextResponse.json({
      success: true,
      data: result,
      message: '배경 이미지가 제거되었습니다.',
    });
  } catch (error: unknown) {
    console.error('배경 이미지 제거 오류:', error);
    let message = '이미지 제거에 실패했습니다.';
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
