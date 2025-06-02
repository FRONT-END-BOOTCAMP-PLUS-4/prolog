import { marked } from 'marked';
// XSS 방지를 위해 HTML을 정제해주는 라이브러리
import DOMPurify from 'isomorphic-dompurify';

// slice
import Tag from '@/shared/ui/tag';
import styles from '../styles/BodyTextPres.module.scss';

type Props = {
  content: string;
  tags: string[];
};

export default function BodyTextPres({ content, tags }: Props) {
  const rawHtml = marked(content, {
    breaks: true,
    gfm: true,
  }) as string;

  // 변환된 HTML에서 악성 스크립트 제거 (보안 처리)
  const sanitizedHtml = DOMPurify.sanitize(rawHtml);

  return (
    <>
      <div
        className={styles.bodyText}
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
      <div className={styles.tagList}>
        {tags.map((tag, idx) => (
          <Tag key={`${tag}-${idx}`}>{tag}</Tag>
        ))}
      </div>
    </>
  );
}
