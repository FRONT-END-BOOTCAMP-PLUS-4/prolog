//slice
import ProfileCardCont from '@/views/story/profile-card/container/ProfileCardCont';

//style
import styles from './styles.module.scss';
import CategoryListCont from '@/features/category-list/container/CategoryListCont';
import MyBlogCardListCont from '@/views/story/myblog-card-list/container/MyBlogCardListCont';
export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardFollowFlex}>
          <ProfileCardCont />
          <div className={styles.categoryCardList}>
            <CategoryListCont />
            {/* 임시 적으로 주석처리 */}
            <div className={styles.cardList}>
              <MyBlogCardListCont />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
