export class SubscribeDto {
  constructor(
    public id: number,
    public requestId: string,
    public responseId: string,
    public createdAt: Date,
  ) {}
}
