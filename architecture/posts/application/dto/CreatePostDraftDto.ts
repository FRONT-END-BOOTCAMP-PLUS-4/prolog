export class CreatePostDraftDto {
  constructor(
    public title: string,
    public content: string,
    public tags: string[],
    public userId: string, // 토큰으로 대체할 예정으로 추후 제거
  ) {}
}
