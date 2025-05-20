'use client';

import { useState, useRef } from 'react';
import MDEditor, { commands, ICommand } from '@uiw/react-md-editor';

import Button from '@/shared/ui/button';
import styles from '../styles/PostFormPres.module.scss';

export default function PostFormPres() {
  const [value, setValue] = useState<string | undefined>('');
  const titleRef = useRef<HTMLInputElement>(null);

  const customCommands: ICommand[] = [
    commands.title1,
    commands.title2,
    commands.title3,
    commands.title4,
    commands.divider,
    commands.bold,
    commands.italic,
    commands.strikethrough,
    commands.divider,
    commands.link,
    commands.divider,
    commands.code,
    commands.quote,
    commands.hr,
    commands.unorderedListCommand,
    commands.orderedListCommand,
  ];

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="제목을 작성해주세요"
        className={styles.titleInput}
        ref={titleRef}
      />
      <div data-color-mode="light" className={styles.editorLayout}>
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
          <Button>AI 사용</Button>
          <Button>공개</Button>
        </div>

        <div className={styles.rightControls}>
          <Button>임시저장</Button>
          <Button variants="active">발행하기</Button>
        </div>
      </div>
    </div>
  );
}
