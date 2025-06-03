import { SelectCont } from '@/features/select';
import { LongCardPres } from '@/widgets/card';
import { MyBlogCardData } from '../types';
import styles from '../styles/myBlogCardList.module.scss';
import PostsSearchCont from '@/features/search-input/container/PostsSearchCont';
type dataProps = {
  data: MyBlogCardData[];
  userId: string;
  // | 'bookMark'
  sort: 'latest' | 'popular';
  // | 'bookMark'
  setSort: (sort: 'latest' | 'popular') => void;
  items: MyBlogCardData[];
  sortOptions: { label: string; value: string }[];
};
export default function MyBlogCardListPres({
  sort,
  setSort,
  items,
  sortOptions,
  data,
  userId,
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
              // | 'bookMark'
              setSort(val as 'latest' | 'popular')
            }
            className={styles.selectWrap}
          />
        </div>
        {data.map((item) => (
          <div className={styles.cardContainer} key={item.id}>
            <LongCardPres userId={userId as string} data={item} />
          </div>
        ))}
      </div>
    </>
  );
}
