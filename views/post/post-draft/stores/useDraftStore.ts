import { create } from 'zustand';

import { BlogPostDraftType, BlogPostType } from '../types';

type DraftStore = {
  drafts: BlogPostDraftType[];
  setDrafts: (list: BlogPostDraftType[]) => void;
  deleteDraft: (id: number) => void;

  selectedPost: BlogPostDraftType | BlogPostType | null;
  setPost: (selectedPost: BlogPostDraftType | BlogPostType) => void;
};

export const useDraftStore = create<DraftStore>((set) => ({
  drafts: [],
  selectedPost: null,
  setDrafts: (list) => set({ drafts: list }),
  deleteDraft: (id) =>
    set((state) => ({
      drafts: state.drafts.filter((draft) => draft.id !== id),
    })),
  setPost: (selectedPost) => set({ selectedPost: selectedPost }),
}));
