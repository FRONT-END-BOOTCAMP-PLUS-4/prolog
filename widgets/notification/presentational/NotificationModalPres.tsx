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
    selectList = [],
    clickSelecterId,
    notificationList = [],
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
        <Button size="small" style={{ border: 0 }} onClick={() => submitRead()}>
          전체읽기
        </Button>
        <Button
          size="small"
          onClick={changeBtnList}
          style={{ border: 0, color: 'red' }}
        >
          삭제
        </Button>
      </div>
    );
  };

  const DeleteSction = () => {
    return (
      <div className={styles.bottomContainer__deleteSection}>
        <Button
          size="small"
          style={{ border: 0 }}
          onClick={isSame ? allCancel : allCheck}
        >
          {isSame ? '전체해제' : '전체선택'}
        </Button>
        <div className={styles.bottomContainer__deleteSection__right}>
          <Button onClick={changeBtnList} size="small" style={{ border: 0 }}>
            취소
          </Button>
          <Button
            size="small"
            style={{ border: 0, color: 'red' }}
            onClick={() => {
              submitDelete(selectList);
              allCancel();
            }}
          >{`삭제 ${selectList.length}`}</Button>
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
      {notificationList && notificationList.length ? (
        <div className={styles.bottomContainer}>
          {isCheck ? <DeleteSction /> : <SelectSection />}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
