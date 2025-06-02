'use client';

import { useEffect, useState } from 'react';
import CommentListPres from '../presentational/CommentListPres';
import { Comment } from '../types';

export default function CommentListCont({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;
    setLoading(true);
    fetch(`/api/member/comments?postId=${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        interface ServerComment {
          id: number;
          nickname: string;
          createdAt: string;
          content: string;
        }

        setComments(
          (data as ServerComment[]).map(
            (c: ServerComment): Comment => ({
              id: c.id,
              userNickName: c.nickname, // ← 서버에서 오는 DTO 필드에 맞게 맵핑
              date: c.createdAt,
              text: c.content,
              // ...필요시 추가 필드 맵핑
            }),
          ),
        );
      })
      .catch(() => {
        setComments([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postId]);

  const handleEditComment = async (id: number, newText: string) => {
    console.log(`PATCH /comments/${id}`, { text: newText });

    // API 요청 (예시용)
    // await fetch(`/api/comments/${id}`, {
    //   method: 'PATCH',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ text: newText }),
    // });

    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, text: newText } : c)),
    );
  };

  const handleDeleteComment = async (id: number) => {
    fetch(`/api/member/comments/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log(`Comment with id ${id} deleted`);
      })
      .catch((error) => {
        console.error(`Failed to delete comment with id ${id}:`, error);
      });

    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <CommentListPres
      comments={comments}
      onEditComment={handleEditComment}
      onDeleteComment={handleDeleteComment}
    />
  );
}
