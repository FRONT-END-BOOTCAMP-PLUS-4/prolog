//slice
import ProfileCardCont from '@/views/profile-card/container/ProfileCardCont';
import PostsSearchCont from '@/features/search-input';

//style
import styles from './styles.module.scss';
import { LongCardPres } from '@/widgets/card';
import CategoryListCont from '@/features/category-list/container/CategoryListCont';
export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardFollowFlex}>
          <ProfileCardCont />
          <div className={styles.inputFlexBox}>
            <div className={styles.inputContainer}>
              <PostsSearchCont />
            </div>
          </div>
          <div className={styles.categoryCardList}>
            <CategoryListCont />
            <div className={styles.cardList}>
              <LongCardPres />
              <LongCardPres />
              <LongCardPres />
              <LongCardPres />
              <LongCardPres />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
