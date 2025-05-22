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
    id: 10,
  },
  {
    createdAt: '2025-05-21',
    title: '무제',
    id: 9,
  },
  {
    createdAt: '2025-05-20',
    title: '아무거나 작성',
    id: 8,
  },
  {
    createdAt: '2025-05-22',
    title: '제목1',
    id: 7,
  },
  {
    createdAt: '2025-05-21',
    title: '타입스크립트 공부하기',
    id: 6,
  },
  {
    createdAt: '2025-05-20',
    title: '디자인패턴 공부',
    id: 5,
  },
  {
    createdAt: '2025-05-19',
    title: '무한스크롤 구현하기',
    id: 4,
  },
  {
    createdAt: '2025-05-19',
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
  const handleDeletePostDraft = (id: number) => {
    const confirmed = window.confirm('삭제하시겠습니까?');
    if (confirmed) {
      console.log(`${id}번 임시글 삭제`);
      // 실제 삭제 로직 작성 예정
    }
  };

  return <PostDraftPres drafts={fakeData} onDelete={handleDeletePostDraft} />;
}
