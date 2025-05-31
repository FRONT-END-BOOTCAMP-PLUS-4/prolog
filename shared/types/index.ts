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
