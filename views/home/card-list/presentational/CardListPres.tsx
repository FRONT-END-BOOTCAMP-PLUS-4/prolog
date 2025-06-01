// package
import { ViewGridIcon, ViewHorizontalIcon } from '@radix-ui/react-icons';

// slice
import styles from '../styles/CardListPres.module.scss';
import { CardListPresProps } from '../types';

// layer
import { SelectCont } from '@/features/select';
import { LongCardPres, SquareCardPres } from '@/widgets/card';
import LongCardSkeleton from '@/shared/ui/skeleton/longcard';
import SquareCardSkeleton from '@/shared/ui/skeleton/squarecard';

const DEFAULT_SKELETON_COUNT = 12;

export default function CardListPres({
  viewType,
  setViewType,
  sort,
  setSort,
  items,
  sortOptions,
  isLoading = false,
}: CardListPresProps) {
  const skeletonCount =
    items.length === 0 ? DEFAULT_SKELETON_COUNT : items.length;

  return (
    <div>
      <div className={styles.filterBar}>
        <div className={styles.filterItem}>
          <SelectCont
            options={sortOptions}
            value={sort}
            onChange={(val) => setSort(val as 'latest' | 'popular')}
            className={styles.selectWrap}
            storageKey="cardlist-sort"
          />
        </div>
        <div className={styles.viewTypeBar}>
          <button
            type="button"
            className={
              viewType === 'card'
                ? styles.viewTypeButtonActive
                : styles.viewTypeButton
            }
            onClick={() => setViewType('card')}
            aria-label="카드형 보기"
          >
            <ViewGridIcon
              className={
                viewType === 'card'
                  ? styles.viewTypeIconActive
                  : styles.viewTypeIcon
              }
            />
          </button>
          <button
            type="button"
            className={
              viewType === 'list'
                ? styles.viewTypeButtonActive
                : styles.viewTypeButton
            }
            onClick={() => setViewType('list')}
            aria-label="리스트형 보기"
          >
            <ViewHorizontalIcon
              className={
                viewType === 'list'
                  ? styles.viewTypeIconActive
                  : styles.viewTypeIcon
              }
            />
          </button>
        </div>
      </div>
      <div
        className={
          styles.cardLayout +
          ' ' +
          (viewType === 'card' ? styles.square : styles.long)
        }
        aria-busy={isLoading}
        role="status"
      >
        {isLoading ? (
          Array.from({ length: skeletonCount }).map((_, idx) =>
            viewType === 'card' ? (
              <SquareCardSkeleton key={`skeleton-${idx}`} />
            ) : (
              <LongCardSkeleton key={`skeleton-${idx}`} />
            ),
          )
        ) : items.length === 0 ? (
          <div className={styles.emptyMessage}>검색 결과가 없습니다.</div>
        ) : (
          items.map((item) =>
            viewType === 'card' ? (
              <SquareCardPres key={`item-${item.id}`} data={item} />
            ) : (
              <LongCardPres key={`item-${item.id}`} data={item} />
            ),
          )
        )}
      </div>
    </div>
  );
}
