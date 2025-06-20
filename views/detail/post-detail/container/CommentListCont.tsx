'use client';

import { useEffect, useState } from 'react';
import CommentListPres from '../presentational/CommentListPres';
import { Comment } from '../types';
import { useCommentStore } from '../stores/useCommentStore';

export default function CommentListCont({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const trigger = useCommentStore((state) => state.trigger);
  const refresh = useCommentStore((state) => state.triggerRefresh);

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
          profileImage: string;
          nickname: string;
          createdAt: string;
          content: string;
          isMine: boolean;
        }

        setComments(
          (data as ServerComment[]).map(
            (c: ServerComment): Comment => ({
              id: c.id,
              userProfileImage: c.profileImage,
              userNickName: c.nickname,
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
  }, [postId, trigger]);

  const handleEditComment = async (id: number, newText: string) => {
    const original = comments.find((c) => c.id === id);
    if (!original || original.text === newText.trim()) {
      return; // 변경 사항이 없으면 요청 보내지 않음
    }

    try {
      const res = await fetch(`/api/member/comments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newText }),
      });

      if (!res.ok) throw new Error();

      setComments((prev) =>
        prev.map((c) => (c.id === id ? { ...c, text: newText } : c)),
      );
    } catch (error) {
      console.error(`Failed to update comment with id ${id}:`, error);
    }
  };

  const handleDeleteComment = async (id: number) => {
    fetch(`/api/member/comments/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setComments((prev) => prev.filter((c) => c.id !== id));
        refresh();
      })
      .catch((error) => {
        console.error(`Failed to delete comment with id ${id}:`, error);
      });
  };

  return (
    <CommentListPres
      comments={comments}
      onEditComment={handleEditComment}
      onDeleteComment={handleDeleteComment}
    />
  );
}
