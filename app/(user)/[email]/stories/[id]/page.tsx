import styles from './styles.module.scss';
import Image from 'next/image';

export default function Page() {
  const comments = [
    {
      userNickName: 'userNickName',
      date: '3일전',
      text: '좋은글 잘읽고 갑니다~ 좋댓구알~',
    },
  ];
  return (
    <div className={styles.container}>
      {/* 제목 */}
      <div className={styles.title}>CSR이란</div>

      <div className={styles.profileLayout}>
        {/* 프로필/팔로우 바 */}
        <div className={styles.profileBar}>
          <div className={styles.profileInfo}>
            <Image
              src="/svgs/profile.svg"
              alt="user"
              width={32}
              height={32}
              className={styles.profileIcon}
            />
            <div>
              <div className={styles.profileName}>userNickName</div>
              <div className={styles.profileDate}>2025-01-01</div>
            </div>
          </div>
          <button className={styles.followBtn}>팔로우</button>
        </div>

        {/* 아이콘 바 */}
        <div className={styles.iconBar}>
          <div className={styles.iconGroup}>
            <Image
              src="/svgs/book.svg"
              alt="book"
              width={21}
              height={20}
              className={styles.icon}
            />
          </div>
          <div className={styles.iconGroup}>
            <Image
              src="/svgs/love.svg"
              alt="love"
              width={20}
              height={20}
              className={styles.icon}
            />
            <span className={styles.iconCount}>16</span>
          </div>
        </div>
      </div>

      {/* AI 목차 요약 */}
      <div className={styles.summaryBox}>
        <div className={styles.summaryTitle}>AI 목차 요약</div>
        <div className={styles.summaryItem}>CSR의 원리</div>
        <div className={styles.summaryItem}>CSR의 적용기</div>
        <div className={styles.summaryItem}>CSR의 문제점</div>
      </div>

      {/* 메인 이미지 */}
      <Image
        src="/svgs/image.svg"
        alt="main"
        width={600}
        height={300}
        className={styles.mainImage}
      />

      {/* 본문 섹션 */}
      <div className={styles.sectionTitle}>CSR 문제점</div>
      <div className={styles.contentText}>
        CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만,
        좀더 인터렉티브한 디자인에는 좋은경험을 CSR은 클라이언트 사이드
        렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한
        디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고
        합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는
        좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는
        SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........
      </div>

      {/* 댓글 타이틀 */}
      <div className={styles.commentTitle}>댓글 목록 (19)</div>

      {/* 댓글 등록 박스 */}
      <div className={styles.commentBox}>
        <input
          className={styles.commentInput}
          placeholder="댓글 등록하기"
          disabled
        />
        <button className={styles.commentBtn}>로그인</button>
      </div>

      {/* 댓글 리스트 */}
      <div className={styles.commentList}>
        {comments.map((c, idx) => (
          <div className={styles.commentItem} key={idx}>
            <Image
              src="/svgs/profile.svg"
              alt="user"
              width={32}
              height={32}
              className={styles.commentProfile}
            />
            <div className={styles.commentContent}>
              <div>
                <span className={styles.commentUser}>{c.userNickName}</span>
                <span className={styles.commentDate}> {c.date}</span>
              </div>
              <div className={styles.commentText}>{c.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
