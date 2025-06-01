import { AiSummaryType } from '../post-form/types';

export type BlogPostDraftType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
};

export type BlogPostType = {
  postId?: number;
  draftId?: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  userId?: string;
  updatedAt?: string;
  aiSummary?: AiSummaryType[] | null;
  isPublic?: number;
  categoryId?: number;
  thumbnailUrl?: string;
  useAi?: number;
};
