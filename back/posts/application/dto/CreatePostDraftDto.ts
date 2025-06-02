export class CreatePostDraftDto {
  constructor(
    public title: string,
    public content: string,
    public tags: string[],
    public userId: string,
  ) {}
}
