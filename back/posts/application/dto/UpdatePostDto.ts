export class UpdatePostDto {
  constructor(
    public title: string,
    public content: string,
    public tags: string[],
    public isPublic: number,
    public useAi: number,
    public postId: number,
    public aiSummary?: string,
    public thumbnailUrl?: string,
  ) {}
}
