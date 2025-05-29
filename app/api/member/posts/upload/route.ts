import { NextRequest } from 'next/server';

import { UploadImgUsecase } from '@/back/upload/application/usecases/UploadImgUsecase';
import { PrUploadImgS3Repository } from '@/back/upload/infra/UploadImgToS3Repository';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const files = formData.getAll('img') as File[];

    if (files.length === 0) {
      return new Response(
        JSON.stringify({ message: '이미지 파일이 없습니다.' }),
        { status: 400 },
      );
    }

    const repository = new PrUploadImgS3Repository();
    const uploadImg = new UploadImgUsecase(repository);
    const urls = await uploadImg.execute(files);

    return new Response(
      JSON.stringify({
        message: '업로드 성공',
        data: urls.length === 1 ? urls[0] : urls,
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
    return new Response(
      JSON.stringify({ message: '이미지 업로드 중 오류 발생' }),
      { status: 500 },
    );
  }
}
