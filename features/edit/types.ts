import { AiSummaryType } from '@/views/post/post-form/types';

export type PostDetailType = {
  id: number;
  title: string;
  thumbnailUrl: string | null;
  content: string;
  createdAt: string;
  updatedAt: string | null;
  tags: string[];
  aiSummary: AiSummaryType[] | null;
  profileImage: string | null;
  nickname: string;
  isLiked: boolean;
  isBookmarked: boolean;
  following: boolean;
  likeCount: number;
  categoryId?: number;
  useAi: number;
  isPublic: number;
};
