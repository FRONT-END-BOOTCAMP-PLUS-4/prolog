export interface UploadImgRepository {
  uploadImg(files: File[]): Promise<string[]>;
}
