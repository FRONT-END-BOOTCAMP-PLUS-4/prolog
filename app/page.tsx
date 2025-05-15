import styles from './styles.module.scss';
import Image from 'next/image';
import {SquareCardPres, LongCardPres} from '@/widgets/card';



export default function Page() {
  return (
    <div>
      {/* 상단 필터/정렬 바 */}
      <div className={styles.filterBar}>
        <div
          className={styles.filterItem + ' ' + styles.filterItemActive}
        >
          최신순
          <Image src="/svgs/down.svg" alt="down" width={12} height={10} className={styles.filterIcon} />
        </div>
        <div className={styles.viewTypeBar}>
          <Image
            src="/svgs/card.svg"
            alt="card"
            width={20}
            height={20}
            className={styles.viewTypeIconActive}
            style={{ cursor: 'pointer' }}
          />
          <Image
            src="/svgs/list.svg"
            alt="list"
            width={20}
            height={20}
            className={styles.viewTypeIcon}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
      </div>
      <div className={styles.cardLayout}>
        <SquareCardPres/>
        <LongCardPres/>
        </div>
    </div>
  );
}
