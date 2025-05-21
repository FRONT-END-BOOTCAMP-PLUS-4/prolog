'use client';

import { useState, useRef } from 'react';
import MDEditor, { ICommand } from '@uiw/react-md-editor';

import styles from '../styles/PostFormPres.module.scss';
import Button from '@/shared/ui/button';
import PostTagSectionPres from './PostTagSectionPres';
import { useImageDrop } from '@/shared/hooks/useImageDrop';

type Props = {
  customCommands: ICommand[];
  uploadImgFiles: (files: File[]) => Promise<string[]>;
};

export default function PostFormPres({
  customCommands,
  uploadImgFiles,
}: Props) {
  const [value, setValue] = useState<string | undefined>('');
  const [tags, setTags] = useState<string[]>([]);

  const [isAiUsed, setIsAiUsed] = useState<number>(0); // 0: 사용 안함, 1: 사용함
  const [isPublic, setIsPublic] = useState<number>(1); // 0: 비공개, 1: 공개

  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

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
          visibleDragbar={false}
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
            <button className={styles.toggleButton}>0</button>
          </div>

          <Button variants="active">발행하기</Button>
        </div>
      </div>
    </div>
  );
}
