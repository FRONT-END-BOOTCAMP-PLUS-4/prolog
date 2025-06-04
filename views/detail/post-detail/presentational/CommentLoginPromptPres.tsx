'use client';

import { LoginForm } from '@/widgets/login';
import styles from '../styles/CommentLoginPromptPres.module.scss';
import Button from '@/shared/ui/button';
import { useModalStore } from '@/shared/stores/useModalStore';

export default function CommentLoginPromptPres() {
  const { open } = useModalStore((state) => state.action);

  const handleLogin = () => {
    open(<LoginForm />, 'center');
  };

  return (
    <div className={styles.commentBox}>
      <div className={styles.commentGuide}>댓글 등록하기</div>
      <Button variants="active" size="small" onClick={handleLogin}>
        로그인
      </Button>
    </div>
  );
}
