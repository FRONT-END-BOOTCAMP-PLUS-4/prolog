export class GetCommentDto {
  constructor(
    public id: number,
    public profileImage: string | null, // 작성자 프로필 (nullable)
    public nickname: string, // 작성자 닉네임
    public userEmail: string, // 작성자 이메일
    public createdAt: Date, // 작성일 (ISO string)
    public updatedAt: Date | null, // 수정일 (nullable)
    public content: string, // 댓글 본문
    public isMine: boolean, // 현재 사용자와 댓글 작성자가 같은지 여부 (기본값: false)
  ) {}
}
