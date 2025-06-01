// package
import { Cross1Icon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/NotificationModalPres.module.scss';

// layer
import { NotificationListCont } from '@/features/notification-list';
import Button from '@/shared/ui/button';




export default function NotificationModalPres() {
  return (
    <div className={styles.modal}>
      <button className={styles.close}>
        <Cross1Icon />
      </button>
      <NotificationListCont/>
    </div>
  );
}
