export type PostListFilter = {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
  sort?: 'latest' | 'popular';
  pageSize?: number;
};

export type PostListItem = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  userId: string;
  name: string;
  userProfileImage: string;
  thumbnailUrl: string | null;
  commentCount?: number;
  loveCount?: number;
  isLiked?: boolean;
};

export type UseInfiniteScrollPostsResult = {
  posts: PostListItem[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchNext: () => void;
  reset: (newFilter?: PostListFilter) => void;
};

export type SearchParams = {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
};

export type SearchContextType = {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
};
