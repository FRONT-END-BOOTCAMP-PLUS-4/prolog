'use client';
import { useState } from 'react';
import CategoryListPres from '../presentational/CategoryListPres';

const categoryList = [
  { id: 1, categoryName: '전체보기' },
  { id: 2, categoryName: 'JAVA' },
  { id: 3, categoryName: 'JavaScript' },
  { id: 4, categoryName: '북마크' },
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
