import { CardData } from '@/widgets/card/types';

export type ViewType = 'card' | 'list';

export type ApiPost = {
  id: number | string;
  title: string;
  content: string;
  tags: string[];
  name?: string;
  userProfileImage?: string;
  createdAt: string;
  commentCount?: number;
  loveCount?: number;
  thumbnailUrl?: string | null;
};

export type CardListPresProps = {
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
  sort: 'latest' | 'popular';
  setSort: (sort: 'latest' | 'popular') => void;
  items: CardData[];
  sortOptions: { label: string; value: string }[];
  isLoading?: boolean;
  userId: string;
};

export type PostListFilter = {
  name?: string;
  tags?: string[];
  title?: string;
  content?: string;
  sort?: 'latest' | 'popular' | 'bookMark';
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
  refetch?: () => void;
  reset: (newFilter?: PostListFilter) => void;
};
