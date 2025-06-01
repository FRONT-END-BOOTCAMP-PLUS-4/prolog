export class GetPostListAllDto {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public tags: string[],
    public createdAt: string,
    public updatedAt: string,
    public userId: string,
    public name: string,
    public userProfileImage: string,
    public thumbnailUrl: string | null,
    public loveCount: number,
    public commentCount: number,
  ) {}
}
