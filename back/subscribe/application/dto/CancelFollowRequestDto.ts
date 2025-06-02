export class CancelFollowRequestDto {
  constructor(
    public requestId: string,
    public responseId: string,
  ) {}
}
export class CancelFollowResponseDto {
  constructor(
    public success: boolean,
    public message: string,
  ) {}
}
