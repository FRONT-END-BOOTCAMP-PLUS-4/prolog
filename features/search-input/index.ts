export { default } from './container/PostsSearchCont';

/**
 * @Desc
 * 
 * <PostsSearchCont useNavigateToHomeWithParams={true}/> : 검색 시 홈으로 이동
 *
 * <PostsSearchCont searchTypes={['title']} /> : 제목만 검색
 *
 * <PostsSearchCont searchTypes={['user']} /> : 유저만 검색
 *
 * <PostsSearchCont searchTypes={['tag']} /> : 태그만 검색
 *
 * <PostsSearchCont searchTypes={['user', 'tag']} /> : 유저 + 태그만 검색
 *
 * <PostsSearchCont /> : 전체 검색
 */
