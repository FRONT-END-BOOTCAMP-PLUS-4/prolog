// package
import clsx from 'clsx';

// slice
import styles from './LongCard.module.scss';

export default function LongCardSkeleton() {
  return (
    <div className={clsx(styles.container, styles.skeleton)}>
      <div className={styles.cardRow}>
        <div className={styles.cardLeft}>
          <div className={styles.profileInfo}>
            <div
              className={clsx(styles.skeletonBox)}
              style={{ width: 32, height: 32, borderRadius: '50%' }}
            />
            <div
              className={clsx(styles.skeletonBox)}
              style={{ width: 60, height: 14, borderRadius: 6 }}
            />
          </div>

          <div className={styles.main}>
            <div className={styles.textWrap}>
              <div
                className={clsx(styles.title, styles.skeletonBox)}
                style={{ width: '70%', height: 20 }}
              />
              <div
                className={clsx(styles.desc, styles.skeletonBox)}
                style={{ width: '90%', marginTop: 4, height: 16 }}
              />
            </div>
          </div>

          <div className={styles.tagWrap}>
            <div
              className={clsx(styles.skeletonBox)}
              style={{ width: '60%', height: 20, borderRadius: 8 }}
            />
          </div>

          <div className={styles.bottom}>
            <div className={styles.iconTextGroup}>
              <div
                className={clsx(styles.skeletonBox)}
                style={{ width: 18, height: 18, borderRadius: 4 }}
              />
              <div
                className={clsx(styles.skeletonBox)}
                style={{ width: 20, height: 12, borderRadius: 6 }}
              />
            </div>
            <div className={styles.iconTextGroup}>
              <div
                className={clsx(styles.skeletonBox)}
                style={{ width: 18, height: 18, borderRadius: 4 }}
              />
            </div>
          </div>
        </div>

        <div className={styles.mainIcon}>
          <div
            className={clsx(styles.skeletonBox)}
            style={{ width: '60%', height: '60%', borderRadius: 8 }}
          />
        </div>
      </div>
    </div>
  );
}
