export type BlogPostDraftType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
};

export type BlogPostType = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  userId?: string;
  updatedAt?: string;
  aiSummary?: string;
  isPublic?: number;
  categoryId?: number;
  thumbnailUrl?: string;
  aiUsageCount?: number;
  useAi?: number;
};
