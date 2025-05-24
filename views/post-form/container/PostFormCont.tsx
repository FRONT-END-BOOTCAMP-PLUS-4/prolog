'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ICommand, commands } from '@uiw/react-md-editor';

import Image from '@/public/svgs/image.svg';
import { getFirstImageUrlFromMarkdown } from '@/shared/utils/image';
import { useDebounce } from '@/shared/hooks/useDebounce';

/* 브라우저 전용 기능이 포함된 컴포넌트이므로 SSR 비활성화 */
const PostFormPres = dynamic(
  () => import('@/views/post-form/presentational/PostFormPres'),
  { ssr: false },
);

export default function PostFormCont() {
  /* 에디터 기본 옵션 */
  const [content, setContent] = useState<string | undefined>('');

  /* 제목 */
  const [title, setTitle] = useState<string>('');

  /* 태그리스트 */
  const [tags, setTags] = useState<string[]>([]);

  /* AI 사용여부, 글 공개여부 */
  const [isAiUsed, setIsAiUsed] = useState<number>(0); // 0: 사용 안함, 1: 사용함
  const [isPublic, setIsPublic] = useState<number>(1); // 0: 비공개, 1: 공개

  /*  */
  useDebounce({
    callback: () => console.log('hello'),
    delay: 30000,
    deps: [content],
    condition: !!title && !!content,
  });

  /* S3에 이미지 업로드 */
  const uploadImageFiles = async (files: File[]) => {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('img', file); // 'img'는 서버에서 받는 필드 이름
    });

    const res = await fetch('/api/member/posts/s3-upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('이미지 업로드 실패');
    }

    const data = await res.json();

    // 항상 배열로 반환되도록 보장
    return Array.isArray(data.data) ? data.data : [data.data];
  };

  const createImageUploadCommand = (
    uploadImages: (files: File[]) => Promise<string[]>,
  ): ICommand => ({
    name: 'upload-image',
    keyCommand: 'upload-image',
    buttonProps: { 'aria-label': '이미지 업로드' },
    icon: <Image />,
    execute: async (_state, api) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.multiple = true;

      input.onchange = async () => {
        const files = input.files ? Array.from(input.files) : [];
        if (files.length === 0) return;

        const urls = await uploadImages(files);
        const insertText = urls.map((url) => `![alt text](${url})`).join('\n');
        api.replaceSelection(insertText);

        const newPosition = api.textArea.textLength;
        api.setSelectionRange({ start: newPosition, end: newPosition });
      };

      input.click();
    },
  });

  /* 블로그 게시글 생성 */
  const createPostHandler = async () => {
    if (!title || !content) return;

    const firstImg = getFirstImageUrlFromMarkdown(content);

    const newPost = {
      title: title,
      content: content,
      tags: tags,
      isAiUsed: isAiUsed,
      isPublic: isPublic,
      userId: 'uuid-2',
      thumbnailUrl: firstImg,
    };

    const res = await fetch('/api/member/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    if (!res.ok) {
      throw new Error('Failed to fetch create blog post');
    }

    const result = await res.json();
    console.log('result : ', result);
  };

  /* 커스텀 툴바 설정 */
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
    createImageUploadCommand(uploadImageFiles),
    commands.divider,
    commands.code,
    commands.quote,
    commands.hr,
    commands.unorderedListCommand,
    commands.orderedListCommand,
  ];

  return (
    <PostFormPres
      customCommands={customCommands}
      uploadImgFiles={uploadImageFiles}
      title={title}
      content={content}
      tags={tags}
      isAiUsed={isAiUsed}
      isPublic={isPublic}
      setIsAiUsed={setIsAiUsed}
      setIsPublic={setIsPublic}
      setContent={setContent}
      setTags={setTags}
      setTitle={setTitle}
      onCreatePost={createPostHandler}
    />
  );
}
