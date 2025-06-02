import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import { UploadImgRepository } from '../domain/UploadImgRepository';

const Bucket = process.env.AWS_BUCKET_NAME;

const s3 = new S3Client({
  region: process.env.MY_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY as string,
  },
});

export class PrUploadImgS3Repository implements UploadImgRepository {
  async uploadImg(files: File[]): Promise<string[]> {
    const uploadPromises = files.map(async (file) => {
      const Body = Buffer.from(await file.arrayBuffer());
      const extension = file.name.split('.').pop();
      const randomStr = Math.random().toString(36).substring(2, 8);
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

      const imageUrl = `https://${Bucket}.s3.${process.env.MY_AWS_REGION}.amazonaws.com/${fileName}`;
      return imageUrl;
    });

    const results = await Promise.allSettled(uploadPromises);

    // 성공한 것만 추출
    const successfulUrls = results
      .filter(
        (result): result is PromiseFulfilledResult<string> =>
          result.status === 'fulfilled',
      )
      .map((result) => result.value);

    // 실패한 로그 출력 (선택)
    results
      .filter((result) => result.status === 'rejected')
      .forEach((result, idx) => {
        console.error(`업로드 실패 (index ${idx}):`, result.reason);
      });

    return successfulUrls;
  }
}
