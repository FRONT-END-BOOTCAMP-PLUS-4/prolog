// slice
import styles from '../styles/BodyTextPres.module.scss';

type Props = {
  body: string;
};

export default function BodyTextPres({ body }: Props) {
  return <div className={styles.bodyText}>{body}</div>;
}
