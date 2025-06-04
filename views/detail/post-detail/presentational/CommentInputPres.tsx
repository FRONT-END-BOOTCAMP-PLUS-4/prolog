import Button from '@/shared/ui/button';
import styles from '../styles/CommentInputPres.module.scss';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
};

export default function CommentInputPres({
  value,
  onChange,
  onSubmit,
  isSubmitting,
}: Props) {
  return (
    <div className={styles.commentBox}>
      <textarea
        className={styles.commentInput}
        placeholder="댓글을 작성해주세요"
        value={value}
        onChange={onChange}
      />
      <Button
        size="small"
        onClick={onSubmit}
        disabled={isSubmitting || !value.trim()}
        variants={value.trim() ? 'active' : 'disabled'}
      >
        댓글 작성
      </Button>
    </div>
  );
}
