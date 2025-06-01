'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { ICommand, commands } from '@uiw/react-md-editor';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import Image from '@/public/svgs/image.svg';
import { getFirstImageUrlFromMarkdown } from '@/shared/utils/image';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { usePostEditorStore } from '../../stores/usePostEditorStore';

/* 브라우저에서만 동작해야 하므로 SSR 비활성화 */
const PostFormPres = dynamic(
  () => import('@/views/post/post-form/presentational/PostFormPres'),
  { ssr: false },
);

const MAX_DRAFT_COUNT = 10;

export default function PostFormCont() {
  const router = useRouter();
  const { drafts, setDrafts, selectedPost } = usePostEditorStore();

  const [content, setContent] = useState<string | undefined>('');
  const [title, setTitle] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  /* AI 사용여부 (0: 사용 안함, 1: 사용함) */
  const [isAiUsed, setIsAiUsed] = useState<number>(0);

  /* 공개 여부 (0: 비공개, 1: 공개) */
  const [isPublic, setIsPublic] = useState<number>(1);

  /* 임시저장된 글 ID (있으면 수정, 없으면 새로 생성) */
  const [draftId, setDraftId] = useState<number | null>();

  /** 임시저장 및 수정 데이터 있다면 초깃값 설정 */
  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title || '');
      setContent(selectedPost.content);
      setTags(selectedPost.tags || []);
      setIsAiUsed(selectedPost.useAi || 0);
      setIsPublic(selectedPost.isPublic || 1);
      setDraftId(selectedPost.id || null);
    }
  }, [selectedPost]);

  useEffect(() => {
    /** 임시 저장 리스트 가져오는 로직 */
    const getPostsDraftList = async () => {
      const response = await fetch('/api/member/posts/drafts');

      if (!response.ok) {
        throw new Error('Failed to fetch post draftList');
      }

      const result = await response.json();

      setDrafts(result.data);
    };
    getPostsDraftList();
  }, [draftId]);

  const validatePost = () => {
    const isValid = !!title && !!content;

    if (!isValid) {
      toast.error('제목과 글을 작성해주세요');
    }
    return isValid;
  };

  /* 임시 저장 (draftId 유무에 따라 생성 또는 수정) */
  const saveDraft = async () => {
    if (!validatePost()) return;

    const isNewDraft = !draftId;

    if (isNewDraft && drafts.length >= MAX_DRAFT_COUNT) {
      toast.error('임시 저장은 최대 10개까지 가능합니다.');
      return;
    }

    if (isNewDraft) {
      const result = await fetch('/api/member/posts/drafts', {
        method: 'POST',
        body: JSON.stringify({ title, content, tags }),
      });

      const response = await result.json();

      setDraftId(response.id);
    } else {
      const result = await fetch('/api/member/posts/drafts', {
        method: 'PUT',
        body: JSON.stringify({ title, content, tags, draftId }),
      });

      await result.json();
    }

    toast.success('임시저장 되었습니다');
  };

  /* 작성 후 30초 동안 내용이 바뀌지 않으면 자동 임시 저장 */
  // useDebounce({
  //   callback: saveDraft,
  //   delay: 30000, // 30초로 설정
  //   deps: [content, draftId],
  //   condition: !!title && !!content,
  // });

  /** S3 에 이미지 업로드  */
  const uploadImageFilesToS3 = async (files: File[]) => {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('img', file); // 서버에서 받는 필드명 'img'
    });

    const res = await fetch('/api/member/posts/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('이미지 업로드 실패');
    }

    const data = await res.json();

    return Array.isArray(data.data) ? data.data : [data.data];
  };

  /* 이미지 업로드 커맨드 정의 */
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
    if (!validatePost()) return;

    const firstImg = getFirstImageUrlFromMarkdown(content!);

    const newPost = {
      title: title,
      content: content,
      tags: tags,
      isAiUsed: isAiUsed,
      isPublic: isPublic,
      thumbnailUrl: firstImg,
    };

    const res = await fetch('/api/member/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
    });

    if (!res.ok) {
      throw new Error('Failed to fetch create blog post');
    }

    toast.success('게시글이 등록되었습니다');
    router.push('/'); // 일단 home 으로 이동시킴
  };

  /* 에디터 툴바에 사용할 커스텀 명령어 모음 */
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
    createImageUploadCommand(uploadImageFilesToS3),
    commands.divider,
    commands.code,
    commands.quote,
    commands.hr,
    commands.unorderedListCommand,
    commands.orderedListCommand,
  ];

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
      />
      <PostFormPres
        customCommands={customCommands}
        uploadImgFiles={uploadImageFilesToS3}
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
        saveDraft={saveDraft}
      />
    </>
  );
}
