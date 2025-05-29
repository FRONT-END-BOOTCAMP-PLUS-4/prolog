export class CreatePostDto {
  constructor(
    public title: string,
    public content: string,
    public tags: string[],
    public isPublic: number,
    public userId: string,
    public useAi: number,
    public AiSummary?: string,
    public thumbnailUrl?: string,
  ) {}
}
