// package
import { useState } from 'react';

// slice
import styles from '../styles/CardListPres.module.scss';
import { CardListPresProps } from '../types';

// layer
import { LongCardPres, SquareCardPres } from '@/widgets/card';
import { SelectCont } from '@/features/select';
import { ViewGridIcon, ViewHorizontalIcon } from '@radix-ui/react-icons';

const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
];

export default function CardListPres({
  viewType,
  setViewType,
  items,
}: CardListPresProps) {
  const [sort, setSort] = useState<'latest' | 'popular'>('latest');

  const sortedItems = [...items].sort((a, b) => {
    if (sort === 'popular') {
      return Number(b.loveCount) - Number(a.loveCount);
    }
    return Number(b.id) - Number(a.id);
  });

  return (
    <div>
      <div className={styles.filterBar}>
        <div className={styles.filterItem}>
          <SelectCont
            options={SORT_OPTIONS}
            value={sort}
            onChange={(val) => setSort(val as 'latest' | 'popular')}
            placeholder="정렬 방식 선택"
            className={styles.selectWrap}
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
      >
        {sortedItems.map((item) =>
          viewType === 'card' ? (
            <SquareCardPres key={item.id} data={item} />
          ) : (
            <LongCardPres key={item.id} data={item} />
          ),
        )}
      </div>
    </div>
  );
}
