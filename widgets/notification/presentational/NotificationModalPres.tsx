// package
import { useState } from 'react';

// slice
import styles from '../styles/NotificationModalPres.module.scss';

// layer
import { NotificationListPres } from '@/features/notification-list';
import { type Notification } from '@/features/notification-list/types';

import Button from '@/shared/ui/button';

type Props = {
  allCheck: () => void;
  allCancel: () => void;
  submitRead: () => void;
  isSuccess: boolean;
  notificationList: Notification[];
  selectList: number[];
  clickSelecterId: (idx: number) => void;
  submitDelete: (idx: number[]) => void;
};

export default function NotificationModalPres(props: Props) {
  const {
    selectList,
    clickSelecterId,
    notificationList,
    allCheck,
    allCancel,
    submitRead,
    isSuccess,
    submitDelete,
  } = props;
  const [isCheck, setisCheck] = useState<boolean>(false);
  const changeBtnList = () => {
    setisCheck(!isCheck);
    allCancel();
  };
  const isSame: boolean = notificationList.length === selectList.length;

  const SelectSection = () => {
    return (
      <div className={styles.bottomContainer__selectSection}>
        <Button
          size="small"
          style={{ padding: '0.4rem' }}
          onClick={() => submitRead()}
        >
          전체읽기
        </Button>
        <Button
          size="small"
          variants="active"
          onClick={changeBtnList}
          style={{ padding: '0.4rem' }}
        >
          삭제하기
        </Button>
      </div>
    );
  };

  const DeleteSction = () => {
    return (
      <div className={styles.bottomContainer__deleteSection}>
        <Button
          size="small"
          style={{ padding: '0.4rem' }}
          onClick={isSame ? allCancel : allCheck}
        >
          {isSame ? '전체해제' : '전체선택'}
        </Button>
        <div className={styles.bottomContainer__deleteSection__right}>
          <Button
            onClick={changeBtnList}
            size="small"
            style={{ padding: '0.4rem' }}
          >
            취소
          </Button>
          <Button
            size="small"
            variants="red"
            style={{ padding: '0.4rem' }}
            onClick={() => {
              submitDelete(selectList);
              allCancel();
            }}
          >{`삭제하기 ${selectList.length}`}</Button>
        </div>
      </div>
    );
  };

  // ----------------------------------------------- render
  return (
    <div className={styles.container}>
      {/* 중단 영역 */}
      <div className={styles.centerContainer}>
        <NotificationListPres
          notificationList={notificationList}
          selectList={selectList}
          isCheck={isCheck}
          selecterId={clickSelecterId}
          submitRead={submitRead}
          isSuccess={isSuccess}
        />
      </div>

      {/* 하단 영역 */}
      {notificationList.length ? (
        <div className={styles.bottomContainer}>
          {isCheck ? <DeleteSction /> : <SelectSection />}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
