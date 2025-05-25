'use client';
import { useState } from 'react';
import CategoryListPres from '../presentational/CategoryListPres';

const categoryList = [
  { id: 1, categoryName: '전체보기' },
  { id: 2, categoryName: 'JAVA' },
  { id: 3, categoryName: 'JavaScript' },
  { id: 4, categoryName: '북마크' },
  { id: 5, categoryName: '북마크' },
  { id: 6, categoryName: '북마크' },
  { id: 7, categoryName: '북마크' },
  { id: 8, categoryName: '북마크' },
  { id: 9, categoryName: '북마크' },
  { id: 10, categoryName: '북마크' },
  { id: 11, categoryName: '북마크' },
  { id: 12, categoryName: '북마크' },
  { id: 13, categoryName: '북마크' },
  { id: 14, categoryName: '북마크' },
];
export default function CategoryListCont() {
  const [category, setCategory] = useState<number>(1);
  const categoryCurrentHandler = (id: number) => {
    setCategory(id);
  };
  return (
    <CategoryListPres
      category={category}
      categoryList={categoryList}
      categoryCurrentHandler={categoryCurrentHandler}
    />
  );
}
