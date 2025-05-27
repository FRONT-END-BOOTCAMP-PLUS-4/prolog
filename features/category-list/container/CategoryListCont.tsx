'use client';
import { useState, useEffect } from 'react';
import CategoryListPres from '../presentational/CategoryListPres';

const categoryList = [
  { id: 1, categoryName: '전체보기' },
  { id: 2, categoryName: 'JAVA' },
  { id: 3, categoryName: 'JavaScript' },
  { id: 4, categoryName: 'react' },
  { id: 5, categoryName: 'vue' },
  { id: 6, categoryName: 'CS' },
  { id: 7, categoryName: '디자인패턴' },
  { id: 8, categoryName: '아키텍처' },
  { id: 9, categoryName: '스터디' },
  { id: 10, categoryName: '멋사' },
  { id: 11, categoryName: '윤준영' },
  { id: 12, categoryName: '귀엽지?' },
  { id: 13, categoryName: '별로' },
  { id: 14, categoryName: '안귀여워' },
];
export default function CategoryListCont() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const query = '(max-width:754px)';
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    media.addEventListener('change', listener);
    return () => {
      media.removeEventListener('change', listener);
    };
  }, []);
  const [category, setCategory] = useState<number>(1);
  const categoryCurrentHandler = (id: number) => {
    setCategory(id);
  };
  return (
    <CategoryListPres
      isMobile={isMobile}
      category={category}
      categoryList={categoryList}
      categoryCurrentHandler={categoryCurrentHandler}
    />
  );
}
