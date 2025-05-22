import PostDraftPres from '../presentational/PostDraftListPres';

export type DraftType = {
  id: number;
  title: string;
  createdAt: string;
};

const fakeData = [
  {
    createdAt: '2025-05-22',
    title: '제목',
    id: 5,
  },
  {
    createdAt: '2025-05-21',
    title: '무한스크롤 구현하기',
    id: 4,
  },
  {
    createdAt: '2025-05-20',
    title:
      '제목이 엄청 길 경우 어떻게 될까 명령어를 필터링하거나 수정할 수 있는 함수입니다. 명령어를 필터링하거나 수정할 수 있는 함수입니다. 명령어를 필터링하거나 수정할 수 있는 함수입니다.',
    id: 3,
  },
  {
    createdAt: '2025-05-15',
    title: '리액트에 대해서',
    id: 2,
  },
  {
    createdAt: '2025-04-02',
    title: 'Next.js 란?',
    id: 1,
  },
] as DraftType[];

export default function PostDraftCont() {
  return <PostDraftPres drafts={fakeData} />;
}
