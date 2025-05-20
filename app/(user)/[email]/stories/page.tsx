import ProfileCardCont from '@/views/profile-card/container/ProfileCardCont';
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Page() {
  // 더미 데이터
  const user = {
    nickname: '유저닉네임',
    intro:
      '안녕하세요! FE개발자입니다. 현재는 취준생이며 이러한 기술들을 사용중입니다. ...',
    isFollowing: false,
    follower: 123,
    following: 45,
  };
  const posts = [
    {
      title: 'SSG에 대해서 알아보겠습니다',
      desc: 'CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........',
      tags: ['Tag', 'Tag'],
      userNickName: 'userNickName',
      date: '2025-01-01',
      commentCount: 16,
      loveCount: 16,
    },
    // ...더미 게시글
  ];
  const followerList = Array(6).fill({ userNickName: 'userNickName' });

  return <ProfileCardCont />;
}
