'use client';

import dynamic from 'next/dynamic';
import { ICommand, commands } from '@uiw/react-md-editor';

import Image from '@/public/svgs/image.svg';

/* 브라우저 전용 기능이 포함된 컴포넌트이므로 SSR 비활성화 */
const PostFormPres = dynamic(
  () => import('@/views/post-form/presentational/PostFormPres'),
  { ssr: false },
);

export default function PostFormCont() {
  const uploadImageFiles = async (files: File[]) => {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('img', file); // 'img'는 서버에서 기대하는 필드 이름
    });

    /* 추후 S3에 업로드 하는 로직으로 대체 */
    const res = await fetch('/api/s3-upload', {
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
    />
  );
}
