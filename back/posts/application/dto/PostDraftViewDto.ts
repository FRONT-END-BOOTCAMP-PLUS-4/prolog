export class PostDraftViewDto {
  constructor(
    public title: string,
    public content: string,
    public tags: string[],
    public id: number,
    public createdAt: string,
  ) {}
}
