import { UploadImgRepository } from '../../domain/UploadImgRepository';

export class UploadImgUsecase {
  constructor(private readonly uploadImgRepository: UploadImgRepository) {}

  async execute(files: File[]): Promise<string[]> {
    const url = await this.uploadImgRepository.uploadImg(files);

    return url;
  }
}
