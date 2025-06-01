export class GetPostViewDto {
  constructor(
    public id: number, // 게시글 ID
    public title: string, // 게시글 제목
    public thumbnailUrl: string | null, // 썸네일 (nullable)
    public content: string, // 본문
    public createdAt: string, // 작성일 (ISO string 권장)
    public updatedAt: string | null, // 수정일 (nullable, ISO string)
    public tags: string[], // 태그 배열 (nullable 아님)
    public aiSummary: string | null, // AI 요약 (nullable)
    public profileImage: string | null, // 작성자 프로필 이미지 (nullable)
    public nickname: string, // 작성자 닉네임
    public userEmail: string, // 작성자 이메일
    public isLiked: boolean, // 내가 좋아요 눌렀는지
    public isBookmarked: boolean, // 내가 북마크 했는지
    public following: boolean, // 내가 이 유저를 팔로잉 중인지
    public likeCount: number, // 좋아요 개수
  ) {}
}
