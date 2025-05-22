export type NotificationItemType = {
  id: string;
  userProfileImage?: string;
  userNickname: string;
  type: 'comment' | 'post';
  content: string;
  postTitle: string;
  postId: string;
  date: string;
  isRead: boolean;
};
