export class UpdateCommentDto {
  constructor(
    public commentId: number,
    public userId: string, // 수정 요청한 유저
    public content: string,
  ) {}
}
