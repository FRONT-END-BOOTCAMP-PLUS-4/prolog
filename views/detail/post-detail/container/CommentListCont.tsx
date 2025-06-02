'use client';

import { useEffect, useState } from 'react';
import CommentListPres from '../presentational/CommentListPres';
import { Comment } from '../types';

export default function CommentListCont({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (!postId) return;
    fetch(`/api/comments?postId=${postId}`)
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
          isMine: boolean; // 서버에서 오는 DTO 필드에 맞게 맵핑
        }

        setComments(
          (data as ServerComment[]).map(
            (c: ServerComment): Comment => ({
              id: c.id,
              userNickName: c.nickname, // ← 서버에서 오는 DTO 필드에 맞게 맵핑
              date: c.createdAt,
              text: c.content,
              isMine: c.isMine,
            }),
          ),
        );
      })
      .catch(() => {
        setComments([]);
      });
  }, [postId]);

  const handleEditComment = async (id: number, newText: string) => {
    fetch(`/api/member/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newText }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        setComments((prev) =>
          prev.map((c) => (c.id === id ? { ...c, text: newText } : c)),
        );
      })
      .catch((error) => {
        console.error(`Failed to update comment with id ${id}:`, error);
      });
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
