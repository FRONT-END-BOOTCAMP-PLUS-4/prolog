export class CreatePostDto {
  constructor(
    public title: string,
    public content: string,
    public tags: string[],
    public isPublic: number,
    public userId: string,
    public useAi: number,
    public aiSummary: string[],
    // public aiSummary?: string,
    public thumbnailUrl?: string,
  ) {}
}
