export interface AlarmRepository {
  findAll(receiverId: string): Promise<
    Array<{
      id: number;
      type: number;
      postsId: number;
      receiverId: string;
      senderId: string;
    }>
  >;
  check(receiverId: string, alarmId: number): Promise<boolean>;
  checkAll(receiverId: string): Promise<boolean>;
  deleteId(alarmId: number[], receiverId: string): Promise<boolean>;
}
