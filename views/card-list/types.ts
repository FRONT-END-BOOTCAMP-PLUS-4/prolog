export type CardData = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  userNickName: string;
  date: string;
  commentCount: number;
  loveCount: number;
  imageUrl: string;
};

export type ViewType = 'card' | 'list';

export type CardListPresProps = {
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
  sort: 'latest' | 'popular';
  setSort: (sort: 'latest' | 'popular') => void;
  items: CardData[];
  sortOptions: { label: string; value: string }[];
};
