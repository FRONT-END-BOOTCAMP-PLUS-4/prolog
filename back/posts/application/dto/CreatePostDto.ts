export class CreatePostDto {
  constructor(
    public title: string,
    public content: string,
    public tags: string[],
    public isPublic: number,
    public userId: string /** 나중에 header token 으로 전달해야 함 */,
    public useAi: number,
    public AiSummary?: string,
    public thumbnailUrl?: string,
  ) {}
}
