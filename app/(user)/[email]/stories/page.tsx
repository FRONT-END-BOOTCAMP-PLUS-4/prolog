'use client';
//slice
import ProfileCardCont from '@/views/story/profile-card/container/ProfileCardCont';

//style
import styles from './styles.module.scss';
import CategoryListCont from '@/features/category-list/container/CategoryListCont';
// import MyBlogCardListCont from '@/views/story/myblog-card-list/container/MyBlogCardListCont';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function Page() {
  const [userId, setUserId] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const id = session?.user.id;
  const pathname = usePathname();
  const username = pathname.split('/')[1];
  useEffect(() => {
    const fetchUserId = async () => {
      const res = await fetch(`/api/member?username=${username}`);
      const data = await res.json();
      if (res.ok) {
        setUserId(data.id);
      } else {
        console.error(data.error);
      }
    };
    fetchUserId();
  }, [username]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardFollowFlex}>
          <ProfileCardCont
            userId={userId as string}
            username={username as string}
          />
          <div className={styles.categoryCardList}>
            <CategoryListCont />
            {/* 임시 적으로 주석처리 */}
            <div className={styles.cardList}>
              {/* <MyBlogCardListCont userId={userId as string} id={id as string} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
