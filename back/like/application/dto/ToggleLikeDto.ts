export class ToggleLikeDto {
  constructor(
    public userId: string,
    public postId: number,
  ) {}
}
