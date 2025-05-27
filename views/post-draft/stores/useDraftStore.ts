import { create } from 'zustand';

import { PostDraftType } from '@/views/post-draft/types';

type DraftStore = {
  drafts: PostDraftType[];
  setDrafts: (list: PostDraftType[]) => void;
  deleteDraft: (id: number) => void;
};

export const useDraftStore = create<DraftStore>((set) => ({
  drafts: [],
  setDrafts: (list) => set({ drafts: list }),
  deleteDraft: (id) =>
    set((state) => ({
      drafts: state.drafts.filter((draft) => draft.id !== id),
    })),
}));
