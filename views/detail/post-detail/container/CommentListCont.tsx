'use client';

import CommentListPres from '../presentational/CommentListPres';

export default function CommentListCont() {
  const dummyComments = [
    {
      userNickName: 'userNickName1',
      date: '2025-01-01',
      text: '좋은글 잘읽고 갑니다~',
    },
    {
      userNickName: 'userNickName2',
      date: '2025-01-02',
      text: '정말 유익한 정보네요!',
    },
    {
      userNickName: 'userNickName3',
      date: '2025-01-03',
      text: '감사합니다! 많은 도움이 되었습니다.',
    },
    {
      userNickName: 'userNickName4',
      date: '2025-01-04',
      text: '좋은글 잘읽고 갑니다~',
    },
    {
      userNickName: 'userNickName5',
      date: '2025-01-05',
      text: '정말 유익한 정보네요!',
    },
  ];

  return <CommentListPres comments={dummyComments} />;
}
