export class BookmarkDto {
  constructor(
    public userId: string,
    public postId: number,
    public bookmarked: boolean,
  ) {}
}
