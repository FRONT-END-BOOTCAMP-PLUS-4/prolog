import { NextRequest, NextResponse } from 'next/server';
import { getSettingUseCase } from '@/back/setting/infra/_factory';
import { auth } from '@/app/(auth)/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 },
      );
    }
    const userProfile = await getSettingUseCase().getUserProfile(
      session.user.id,
    );
    return NextResponse.json({ success: true, data: userProfile });
  } catch (error) {
    return NextResponse.json(
      { error: '프로필 조회에 실패했습니다.' },
      { status: 500 },
    );
  }
}
export async function PUT(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 },
      );
    }
    const body = await request.json();
    const { name, introduction, profileImg, backgroundImg } = body;
    const updatedProfile = await getSettingUseCase().updateUserProfile(
      session.user.id,
      { name, introduction, profileImg, backgroundImg },
    );
    return NextResponse.json({
      success: true,
      data: updatedProfile,
      message: '프로필이 업데이트되었습니다.',
    });
  } catch (error: unknown) {
    let message = '프로필 업데이트에 실패했습니다.';
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 },
      );
    }

    await getSettingUseCase().deleteUserAccount(session.user.id, 'soft');
    return NextResponse.json({
      success: true,
      message: '계정이 탈퇴 처리되었습니다.',
    });
  } catch (error: unknown) {
    let message = '계정 탈퇴에 실패했습니다.';
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
