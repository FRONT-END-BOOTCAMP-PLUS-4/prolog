import styles from './LoadingBar.module.scss';

type Props = {
  content?: string;
};

export default function LoadingBar({ content }: Props) {
  return (
    <div className={styles.loadingBar}>
      <h1>{content || ''}</h1>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
