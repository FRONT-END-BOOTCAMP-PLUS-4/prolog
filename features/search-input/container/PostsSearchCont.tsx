// package
import { type JSX } from 'react';
// slice
import SearchInputPres from '@/features/search-input/presentational/SearchInputPres';

export default function PostsSearchCont(): JSX.Element {
    
    // 만약 검색의 경우의 수가 많아서 힘들다면 container 나눠서 사용하세요~

  return <SearchInputPres/>
}