export type BlogPostDraftType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export type BlogPostType = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  aiSummary?: string;
  isPublic: number;
  userId: string;
  categoryId: number;
  thumbnailUrl?: string;
  aiUsageCount: number;
  useAi: number;
};
