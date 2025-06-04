export class CreateFollowRequestDto {
  constructor(
    public requestId: string,
    public responseId: string,
  ) {}
}
export class CreateFollowResponseDto {
  constructor(
    public success: boolean,
    public message: string,
    public followId?: number,
  ) {}
}
