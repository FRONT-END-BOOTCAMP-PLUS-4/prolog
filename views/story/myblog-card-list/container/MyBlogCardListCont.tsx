'use client';
import MyBlogCardListPres from '../presentational/MyBlogCardListPres';
import { CardData } from '@/widgets/card/types';

export default function MyBlogCardListCont() {
  const data: CardData[] = Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1),
    title: `CSR이란 ${i + 1}`,
    desc: `CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........ ${i + 1}`,
    tags: [
      'Start',
      'React',
      'TypeScript',
      'Next',
      'HTML',
      'CSS',
      'Java',
      'MySql',
      'End',
    ],
    userNickName: `user ${i + 1}`,
    date: '2025-01-01',
    commentCount: i,
    loveCount: 50 + i,
    imageUrl: '/svgs/image.svg',
  }));
  return <MyBlogCardListPres data={data} />;
}
