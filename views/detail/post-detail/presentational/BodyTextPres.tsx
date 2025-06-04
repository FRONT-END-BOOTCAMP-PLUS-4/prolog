// 마크다운 파서를 생성할 수 있는 Marked 클래스 임포트
import { Marked } from 'marked';
// 마크다운 코드 블럭에 문법 하이라이팅을 적용해주는 확장 플러그인
import { markedHighlight } from 'marked-highlight';
// 코드 블럭에 하이라이팅을 적용해주는 라이브러리 (다양한 언어 지원)
import hljs from 'highlight.js';
// 하이라이팅된 코드 블럭에 적용할 GitHub 스타일 CSS
import 'highlight.js/styles/github.css';
// XSS 방지를 위해 HTML을 정제해주는 라이브러리
import DOMPurify from 'isomorphic-dompurify';

// slice
import Tag from '@/shared/ui/tag';
import styles from '../styles/BodyTextPres.module.scss';

type Props = {
  content: string;
  tags: string[];
};

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    emptyLangClass: 'hljs', // 언어 없는 경우에도 hljs 클래스 유지
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  }),
);

marked.setOptions({
  breaks: true,
  gfm: true,
});

export default function BodyTextPres({ content, tags }: Props) {
  const rawHtml = marked.parse(content) as string;

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
