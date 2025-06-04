import styles from './Spinner.module.scss';

type Props = {
  content?: string;
};

export default function Spinner({ content }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.spinner}></div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
