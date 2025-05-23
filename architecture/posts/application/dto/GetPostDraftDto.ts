export class GetPostDraftDto {
  constructor(
    public id: number,
    public userId: string,
    public title: string,
    public content: string,
    public tags: string[],
    public createdAt: string,
  ) {}
}
