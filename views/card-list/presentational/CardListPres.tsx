// package
import { useRef, useState } from 'react';
import Image from 'next/image';

// slice
import { LongCardPres, SquareCardPres } from '@/widgets/card';
import styles from '../styles/CardListPres.module.scss';

// layer
import useOnClickOutside from '@/shared/hooks/useOnClickOutside';
import CardIcon from '@/public/svgs/card.svg';
import ListIcon from '@/public/svgs/list.svg';

type Item = {
  id: number;
  title?: string;
  description?: string;
};

type CardListPresProps = {
  viewType: 'card' | 'list';
  setViewType: (viewType: 'card' | 'list') => void;
  items: Item[];
};

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
  const [selectOpen, setSelectOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectRef = useRef<HTMLSelectElement>(null);

  // 커스텀 훅으로 외부 클릭 시 드롭다운 닫기
  useOnClickOutside(dropdownRef, () => setSelectOpen(false), selectOpen);

  return (
    <div>
      <div className={styles.filterBar}>
        <div className={styles.filterItem}>
          <div className={styles.selectWrap} ref={dropdownRef}>
            <select
              ref={selectRef}
              className={styles.select}
              value={sort}
              onChange={(e) => setSort(e.target.value as 'latest' | 'popular')}
              aria-label="정렬 방식 선택"
              onClick={() => setSelectOpen((prev) => !prev)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectOpen((prev) => !prev);
                }
              }}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <Image
              src="/svgs/down.svg"
              alt="down"
              width={16}
              height={16}
              className={`${styles.filterIcon} ${selectOpen ? styles.filterIconOpen : ''}`}
              aria-hidden
            />
          </div>
        </div>
        {/* 뷰 타입 토글 */}
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
            <CardIcon
              className={
                viewType === 'card'
                  ? styles.viewTypeIconActive
                  : styles.viewTypeIcon
              }
            />
          </button>

          {/* 리스트형 보기 버튼 */}
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
            <ListIcon
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
        {items.map((item) =>
          viewType === 'card' ? (
            <SquareCardPres key={item.id} {...item} />
          ) : (
            <LongCardPres key={item.id} {...item} />
          ),
        )}
      </div>
    </div>
  );
}
