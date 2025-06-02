import styles from '../styles/CommentLoginPromptPres.module.scss';
import Button from '@/shared/ui/button';

export default function CommentLoginPromptPres() {
  return (
    <div className={styles.commentBox}>
      <div className={styles.commentGuide}>댓글 등록하기</div>
      <Button variants="active" size="small">
        로그인
      </Button>
    </div>
  );
}
