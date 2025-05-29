//slice
import ProfileCardCont from '@/views/story/profile-card/container/ProfileCardCont';

//style
import styles from './styles.module.scss';
import CategoryListCont from '@/features/category-list/container/CategoryListCont';
import MyBlogCardListCont from '@/views/story/myblog-card-list/container/MyBlogCardListCont';
import { auth } from '@/app/(auth)/auth';

export default async function Page() {
  const session = await auth();
  //나중에 UI 처리 또는 처리 방식 고민해보기 !
  if (!session) {
    return (
      <>
        <div>로그인 후 이용하실 수 있는 서비스입니다.</div>
      </>
    );
  }
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
