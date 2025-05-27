import { SelectCont } from '@/features/select';
import { LongCardPres } from '@/widgets/card';
import { MyBlogCardData } from '../types';
import styles from '../styles/myBlogCardList.module.scss';
import PostsSearchCont from '@/features/search-input/container/PostsSearchCont';
type dataProps = {
  data: MyBlogCardData[];
  sort: 'latest' | 'popular' | 'bookMark';
  setSort: (sort: 'latest' | 'popular' | 'bookMark') => void;
  items: MyBlogCardData[];
  sortOptions: { label: string; value: string }[];
};
export default function MyBlogCardListPres({
  sort,
  setSort,
  items,
  sortOptions,
  data,
}: dataProps) {
  return (
    <>
      <div className={styles.myBlogContainer}>
        <div className={styles.selectContainer}>
          <PostsSearchCont />
          <SelectCont
            options={sortOptions}
            value={sort}
            onChange={(val) =>
              setSort(val as 'latest' | 'popular' | 'bookMark')
            }
            className={styles.selectWrap}
          />
        </div>
        {data.map((item) => (
          <div className={styles.cardContainer} key={item.id}>
            <LongCardPres data={item} />
          </div>
        ))}
      </div>
    </>
  );
}
