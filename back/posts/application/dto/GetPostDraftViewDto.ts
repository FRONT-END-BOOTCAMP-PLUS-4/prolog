export class GetPostDraftViewDto {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public tags: string[],
    public createdAt: string,
  ) {}
}
