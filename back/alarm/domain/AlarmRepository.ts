export type findAllReturn = {
  id: number;
  type: number;
  postsId: number;
  senderId: string;
  checkStatus: number;
  createAt: Date;
  title: string;
  content: string;
  senderName: string;
  senderProfileImg: string | null;
  comment_content: string | null;
};

export interface AlarmRepository {
  findAll(receiverId: string): Promise<findAllReturn[]>;
  check(receiverId: string, alarmId: number): Promise<boolean>;
  checkAll(receiverId: string): Promise<boolean>;
  deleteId(alarmId: number[], receiverId: string): Promise<boolean>;
}
