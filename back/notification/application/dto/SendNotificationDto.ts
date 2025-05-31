export class SendNotificationDto {
  constructor(
    public type: number,
    public postsId: number,
    public receiverId: string[],
    public senderId: string,
  ) {}
}
