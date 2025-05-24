import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest } from 'next/server';

const Bucket = process.env.AWS_BUCKET_NAME;

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SCREAT_KEY as string,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll('img') as File[];

    const uploadPromises = files.map(async (file) => {
      const Body = Buffer.from(await file.arrayBuffer());
      const extension = file.name.split('.').pop();
      const randomStr = Math.random().toString(36).substring(2, 8); // 랜덤 문자열
      const timestamp = Date.now();
      const fileName = `${timestamp}_${randomStr}.${extension}`;
      const ContentType = file.type || 'image/jpeg';

      const command = new PutObjectCommand({
        Bucket,
        Key: fileName,
        Body,
        ContentType,
      });

      await s3.send(command);

      const imageUrl = `https://${Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
      return imageUrl;
    });

    const imgUrls = await Promise.all(uploadPromises);

    return new Response(
      JSON.stringify({
        data: imgUrls.length === 1 ? imgUrls[0] : imgUrls,
        message: 'OK',
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error('Error uploading files:', error);
    return new Response(
      JSON.stringify({ message: '파일 업로드 중 오류가 발생했습니다.' }),
      { status: 500 },
    );
  }
}
