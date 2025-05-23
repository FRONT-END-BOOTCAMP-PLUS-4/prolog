import { useState, useRef } from 'react';
import MDEditor, { ICommand } from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

import styles from '../styles/PostFormPres.module.scss';
import PostTagSectionPres from './PostTagSectionPres';
import PostDraftCont from '@/views/post-draft/container/PostDraftListCont';

import Button from '@/shared/ui/button';
import { useImageDrop } from '@/shared/hooks/useImageDrop';
import { useModalStore } from '@/shared/stores/useModalStore';

type Props = {
  customCommands: ICommand[];
  uploadImgFiles: (files: File[]) => Promise<string[]>;
};

export default function PostFormPres({
  customCommands,
  uploadImgFiles,
}: Props) {
  /* 에디터 기본 옵션 */
  const [value, setValue] = useState<string | undefined>('');

  /* 태그리스트 */
  const [tags, setTags] = useState<string[]>([]);

  const [isAiUsed, setIsAiUsed] = useState<number>(0); // 0: 사용 안함, 1: 사용함
  const [isPublic, setIsPublic] = useState<number>(1); // 0: 비공개, 1: 공개

  /* 제목 */
  const titleRef = useRef<HTMLInputElement>(null);
  /* 이미지 드래그 앤 드랍을 위한 ref */
  const editorRef = useRef<HTMLDivElement>(null);

  const { action } = useModalStore();

  const toggleAiUsage = () => {
    setIsAiUsed((prev) => (prev === 0 ? 1 : 0));
  };

  const togglePublic = () => {
    setIsPublic((prev) => (prev === 0 ? 1 : 0));
  };

  /** 블로그 글 POST 요청 테스트 */
  const createPostHandler = async () => {
    if (!value || !titleRef.current) return;

    const newPost = {
      userId: 'uuid-2',
      title: titleRef.current.value,
      content: value,
      isPublic: isPublic,
      tags: tags,
      useAi: isAiUsed,
    };

    const res = await fetch('/api/member/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    const result = await res.json();
    console.log('result : ', result);
  };

  useImageDrop({
    ref: editorRef,
    onDropImages: async (files) => {
      const urls = await uploadImgFiles(files);
      const markdown = urls.map((url) => `![image](${url})`).join('\n');
      setValue((prev) => `${prev}\n${markdown}`);
    },
  });

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="제목을 작성해주세요"
        className={styles.titleInput}
        ref={titleRef}
      />
      <PostTagSectionPres tags={tags} setTags={setTags} />
      <div
        data-color-mode="light"
        className={styles.editorLayout}
        ref={editorRef}
      >
        <MDEditor
          value={value}
          onChange={setValue}
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
          <div className={styles.toggleButtonWrapper}>
            <button className={styles.toggleButton}>임시저장</button>
            <button
              className={styles.toggleButton}
              onClick={() => action.open(<PostDraftCont />)}
            >
              10
            </button>
          </div>

          <Button variants="active" onClick={createPostHandler}>
            발행하기
          </Button>
        </div>
      </div>
    </div>
  );
}
