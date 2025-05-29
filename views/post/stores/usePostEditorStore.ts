import { create } from 'zustand';
import { BlogPostDraftType, BlogPostType } from '../post-draft/types';

type PostEditorStoreType = {
  // 드래프트 목록
  drafts: BlogPostDraftType[];

  // 드래프트 목록 설정
  setDrafts: (list: BlogPostDraftType[]) => void;

  // 특정 드래프트 삭제 (id 기준)
  deleteDraft: (id: number) => void;

  // 선택된 포스트 (읽기 또는 수정용)
  selectedPost: BlogPostType | null;

  // 선택된 포스트 설정
  setSelectedPost: (selectedPost: BlogPostType) => void;
};

export const usePostEditorStore = create<PostEditorStoreType>((set) => ({
  drafts: [],
  selectedPost: null,

  setDrafts: (list) => set({ drafts: list }),
  deleteDraft: (id) =>
    set((state) => ({
      drafts: state.drafts.filter((draft) => draft.id !== id),
    })),

  setSelectedPost: (selectedPost) => set({ selectedPost: selectedPost }),
}));
