import { useRef, Dispatch, SetStateAction } from 'react';
import MDEditor, { ICommand } from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

import styles from '../styles/PostFormPres.module.scss';
import PostTagSectionPres from './PostTagSectionPres';
import PostDraftButtonPres from '@/views/post-draft/presentational/PostDraftButtonPres';

import Button from '@/shared/ui/button';
import { useImageDrop } from '@/shared/hooks/useImageDrop';
import { useModalStore } from '@/shared/stores/useModalStore';
import { useThemeStore } from '@/shared/stores/useThemeStore';

type Props = {
  customCommands: ICommand[];
  uploadImgFiles: (files: File[]) => Promise<string[]>;
  title: string;
  content: string | undefined;
  tags: string[];
  isAiUsed: number;
  isPublic: number;
  setIsAiUsed: Dispatch<SetStateAction<number>>;
  setIsPublic: Dispatch<SetStateAction<number>>;
  setContent: Dispatch<SetStateAction<string | undefined>>;
  setTags: Dispatch<SetStateAction<string[]>>;
  setTitle: Dispatch<SetStateAction<string>>;
  onCreatePost: () => Promise<void>;
  saveDraft: () => Promise<void>;
};

export default function PostFormPres(props: Props) {
  const {
    customCommands,
    uploadImgFiles,
    title,
    content,
    tags,
    isAiUsed,
    isPublic,
    setIsAiUsed,
    setIsPublic,
    setContent,
    setTags,
    setTitle,
    onCreatePost,
    saveDraft,
  } = props;

  /* 이미지 드래그 앤 드랍을 위한 ref */
  const editorRef = useRef<HTMLDivElement>(null);

  const { action } = useModalStore();

  const { theme } = useThemeStore();

  const toggleAiUsage = () => {
    setIsAiUsed((prev) => (prev === 0 ? 1 : 0));
  };

  const togglePublic = () => {
    setIsPublic((prev) => (prev === 0 ? 1 : 0));
  };

  useImageDrop({
    ref: editorRef,
    onDropImages: async (files) => {
      const urls = await uploadImgFiles(files);
      const markdown = urls.map((url) => `![image](${url})`).join('\n');
      setContent((prev) => `${prev}\n${markdown}`);
    },
  });

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="제목을 작성해주세요"
        className={styles.titleInput}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <PostTagSectionPres tags={tags} setTags={setTags} />
      <div
        data-color-mode={theme === 'dark' ? 'dark' : 'light'}
        className={styles.editorLayout}
        ref={editorRef}
      >
        <MDEditor
          value={content}
          onChange={setContent}
          commands={customCommands}
          extraCommands={[]} // 오른쪽 툴바 빈배열
          enableScroll={true} // 스크롤
          visibleDragbar={false} // 에디터 크기 조절
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }} // XSS 공격 방지
          textareaProps={{
            placeholder: '당신의 생각을 적어주세요..',
          }}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.leftControls}>
          <Button
            onClick={toggleAiUsage}
            variants={isAiUsed ? 'active' : undefined}
          >
            {isAiUsed ? 'AI 사용' : 'AI 사용 안함'}
          </Button>
          <Button
            onClick={togglePublic}
            variants={isPublic ? 'active' : undefined}
          >
            {isPublic ? '공개' : '비공개'}
          </Button>
        </div>

        <div className={styles.rightControls}>
          <PostDraftButtonPres saveDraft={saveDraft} />
          <Button variants="active" onClick={onCreatePost}>
            발행하기
          </Button>
        </div>
      </div>
    </div>
  );
}
