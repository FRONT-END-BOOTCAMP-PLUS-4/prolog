import Button from '@/shared/ui/button';
import styles from '../styles/PostAiFormPres.module.scss';

const summary = [
  { item: '데이터1', id: 1 },
  { item: '데이터2', id: 2 },
  { item: '데이터3', id: 3 },
  { item: '데이터4', id: 4 },
  { item: '데이터5', id: 5 },
];

export default function PostAiFormPres() {
  return (
    <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
      <div className="chatBubble">
        <p>AI에게 이 글을 요약해서 목차를 받아볼까요?</p>
        <div className="choices">
          <Button>네, 부탁해요</Button>
          <Button>아니요</Button>
        </div>
      </div>

      {/* {isLoading && <Spinner />} */}

      <div className="result">
        <h4>✨ AI가 제안하는 목차</h4>
        <ul>
          {/* {summary.map((item, i) => (
            <li key={i}>{item}</li>
          ))} */}
        </ul>
        <div className="choices">
          <Button>사용할래요</Button>
          <Button>다시 만들어줘</Button>
          <Button>사용 안 할래요</Button>
        </div>
      </div>
    </div>
  );
}
