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
};
