//slice
import ProfileCardCont from '@/views/profile-card/container/ProfileCardCont';
import PostsSearchCont from '@/features/search-input';

//style
import styles from './styles.module.scss';
import CategoryListCont from '@/features/category-list/container/CategoryListCont';
import { CardListCont } from '@/views/card-list';
export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardFollowFlex}>
          <ProfileCardCont />
          <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
              <PostsSearchCont />
            </div>
          </div>
          <div className={styles.categoryCardList}>
            <CategoryListCont />
            {/* 임시 적으로 주석처리 */}
            {/* <div className={styles.cardList}>
              <CardListCont />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
