export class CreateCommentDto {
  constructor(
    public userId: string, // 작성자 id
    public postsId: number, // 게시글 id
    public content: string, // 댓글 내용
  ) {}
}
