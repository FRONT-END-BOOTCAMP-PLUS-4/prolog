import { NextRequest, NextResponse } from 'next/server';
import { getSettingUseCase } from '@/back/setting/infra/_factory';
import { auth } from '@/app/(auth)/auth';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 },
      );
    }

    const formData = await request.formData();
    const file = formData.get('file');
    const type = formData.get('type') as 'profile' | 'background';

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: '파일이 제공되지 않았습니다.' },
        { status: 400 },
      );
    }
    if (!type || (type !== 'profile' && type !== 'background')) {
      return NextResponse.json(
        { error: '잘못된 타입입니다.' },
        { status: 400 },
      );
    }

    const result = await getSettingUseCase().uploadImage({ file, type });

    return NextResponse.json({
      success: true,
      data: result,
      message: '이미지가 업로드되었습니다.',
    });
  } catch (error: unknown) {
    console.error('이미지 업로드 오류:', error);
    let message = '이미지 업로드에 실패했습니다.';
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
