export type Notification = {
  id: number;
  type: number;
  postsId: number;
  senderId: string;
  checkStatus: number;
  createAt: string;
  title: string;
  content: string;
  senderName: string;
  senderProfileImg: string | null;
  comment_content: string | null;
};