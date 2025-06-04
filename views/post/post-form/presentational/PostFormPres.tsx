import { useRef, Dispatch, SetStateAction } from 'react';
import MDEditor, { ICommand } from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

import styles from '../styles/PostFormPres.module.scss';
import PostTagSectionPres from './PostTagSectionPres';
import PostDraftListCont from '@/views/post/post-draft/container/PostDraftListCont';
import PostAiSummaryCont from '../container/PostAiSummaryCont';

import Button from '@/shared/ui/button';
import { useImageDrop } from '@/shared/hooks/useImageDrop';
import { useThemeStore } from '@/shared/stores/useThemeStore';
import { useModalStore } from '@/shared/stores/useModalStore';
import { usePostEditorStore } from '../../stores/usePostEditorStore';
import MagicWand from '@/public/svgs/magic.svg';
import { AiSummaryType } from '../types';

type Props = {
  customCommands: ICommand[];
  uploadImgFiles: (files: File[]) => Promise<string[]>;
  title: string;
  content: string | undefined;
  tags: string[];
  isPublic: number;
  setIsAiUsed: Dispatch<SetStateAction<number>>;
  setIsPublic: Dispatch<SetStateAction<number>>;
  setContent: Dispatch<SetStateAction<string | undefined>>;
  setTags: Dispatch<SetStateAction<string[]>>;
  setTitle: Dispatch<SetStateAction<string>>;
  onCreatePost: () => Promise<void>;
  saveDraft: () => Promise<void>;
  setAiSummary: Dispatch<SetStateAction<AiSummaryType[] | null>>;
  aiSummary: AiSummaryType[] | null;
};

export default function PostFormPres(props: Props) {
  const {
    customCommands,
    uploadImgFiles,
    title,
    content,
    tags,
    isPublic,
    setIsAiUsed,
    setIsPublic,
    setContent,
    setTags,
    setTitle,
    onCreatePost,
    saveDraft,
    setAiSummary,
    aiSummary,
  } = props;

  /* 이미지 드래그 앤 드랍을 위한 ref */
  const editorRef = useRef<HTMLDivElement>(null);

  const { theme } = useThemeStore();
  const { action } = useModalStore();
  const { action: actionToAi } = useModalStore();
  const { drafts, selectedPost } = usePostEditorStore();

  console.log('selected', selectedPost);

  const togglePublic = () => {
    setIsPublic((prev) => (prev === 0 ? 1 : 0));
  };

  /* 이미지 드래그 앤 드랍 관련 커스텀 훅 */
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

      <footer className={styles.footer}>
        <div className={styles.leftControls}>
          <Button
            variants={aiSummary ? 'active' : 'secondary'}
            onClick={() =>
              actionToAi.open(
                <PostAiSummaryCont
                  content={content}
                  setAiSummary={setAiSummary}
                  aiSummary={aiSummary}
                  setIsAiUsed={setIsAiUsed}
                />,
              )
            }
          >
            <MagicWand />
          </Button>
          <Button
            onClick={togglePublic}
            variants={isPublic ? 'active' : undefined}
          >
            {isPublic ? '게시글 공개' : '게시글 비공개'}
          </Button>
        </div>

        <div className={styles.rightControls}>
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.toggleButton} ${styles.saveButton}`}
              onClick={saveDraft}
            >
              임시저장
            </button>
            <button
              className={`${styles.toggleButton} ${styles.countButton}`}
              onClick={() => action.open(<PostDraftListCont />)}
            >
              {drafts?.length}
            </button>
          </div>
          <Button variants="active" onClick={onCreatePost}>
            발행하기
          </Button>
        </div>
      </footer>
    </div>
  );
}
