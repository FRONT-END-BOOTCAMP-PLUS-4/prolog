export type TagListContProps = {
  tags: string[];
};

export type TagListPresProps = {
  tags: string[];
  shouldRoll: boolean;
  tagsRef: React.RefObject<HTMLDivElement | null>;
  duration?: number;
};
