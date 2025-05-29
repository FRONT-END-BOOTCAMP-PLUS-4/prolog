export class GetPostViewDto {
  constructor(
    public id: number,
    public title: string,
    public profileImage: string | null,
    public nickname: string,
    public createdAt: string,
    public updatedAt: string | null,
    public following: boolean,
    public isBookmarked: boolean,
    public isLiked: boolean,
    public likeCount: number,
    public content: string,
    public tags?: string[],
    public aiSummary?: string,
    public thumbnailUrl?: string,
  ) {}
}
