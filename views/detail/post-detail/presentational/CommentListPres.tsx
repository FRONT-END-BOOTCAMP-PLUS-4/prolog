'use client';

import { useState } from 'react';
import styles from '../styles/CommentListPres.module.scss';
import { Comment } from '../types';
import Profile from '@/shared/ui/profile';
import { EditButtonCont } from '@/features/edit';
import { DeleteButtonCont } from '@/features/delete';
import dayjs from 'dayjs';

type Props = {
  comments: Comment[];
  onEditComment: (id: number, newText: string) => void;
  onDeleteComment: (id: number) => void;
};

export default function CommentListPres({
  comments,
  onEditComment,
  onDeleteComment,
}: Props) {
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const formatDate = (isoString: string) => {
    return dayjs(isoString).format('YYYY-MM-DD');
  };

  const handleStartEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSubmitEdit = () => {
    if (editId !== null) {
      onEditComment(editId, editText);
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div className={styles.commentList}>
      {comments.map((c) => (
        <div className={styles.commentItem} key={c.id}>
          <div className={styles.commentHeader}>
            <Profile userName={c.userNickName} date={formatDate(c.date)} />
            {editId === c.id ? (
              <button className={styles.editDone} onClick={handleSubmitEdit}>
                완료
              </button>
            ) : (
              c.isMine && ( // ← 내가 쓴 댓글일 때만 보이게!
                <div className={styles.actionButtons}>
                  <EditButtonCont
                    mode="comment"
                    onEdit={() => handleStartEdit(c.id, c.text)}
                  />
                  <span>|</span>
                  <DeleteButtonCont
                    mode="comment"
                    onDelete={() => onDeleteComment(c.id)}
                  />
                </div>
              )
            )}
          </div>

          {editId === c.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className={styles.commentEditInput}
            />
            // <CommentInput
            //   editText={editText}
            //   onChange={handleEditTextChange}
            //   className={styles.commentEditInput}
            // />
          ) : (
            <div className={styles.commentText}>{c.text}</div>
          )}
        </div>
      ))}
    </div>
  );
}
