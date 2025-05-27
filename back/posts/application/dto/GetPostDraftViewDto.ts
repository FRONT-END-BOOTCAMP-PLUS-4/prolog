export class GetPostDraftViewDto {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public createdAt: string,
  ) {}
}
