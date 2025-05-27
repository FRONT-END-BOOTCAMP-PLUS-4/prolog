// package
import clsx from 'clsx';

// slice
import styles from './SquareCard.module.scss';

export default function SquareCardSkeleton() {
  return (
    <div className={clsx(styles.container, styles.skeleton)}>
      <div className={styles.flexGrowArea}>
        <div className={clsx(styles.iconWrap, styles.skeletonBox)} />
        <div className={styles.content}>
          <div
            className={clsx(styles.title, styles.skeletonBox)}
            style={{ width: '70%', height: '2rem' }}
          />
          <div
            className={clsx(styles.descWithImg, styles.skeletonBox)}
            style={{ height: '5.6rem', marginTop: 8 }}
          />
        </div>
      </div>
      <div className={styles.tagWrap}>
        <div
          className={clsx(styles.skeletonBox)}
          style={{
            marginLeft: '0.4rem',
            marginTop: '0.5rem',
            width: '60%',
            height: '1rem',
            borderRadius: 8,
          }}
        />
      </div>
      <div className={styles.profileBar}>
        <div className={styles.profileInfo}>
          <div
            className={clsx(styles.skeletonBox)}
            style={{ width: 32, height: 32, borderRadius: '50%' }}
          />
          <div
            className={clsx(styles.skeletonBox)}
            style={{ width: 60, height: 12, borderRadius: 6 }}
          />
        </div>
        <div className={styles.mainIcon}>
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
    </div>
  );
}
