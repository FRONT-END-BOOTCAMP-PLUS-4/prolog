import { create } from 'zustand';

import { PostDraftType } from '../types';

type DraftStore = {
  drafts: PostDraftType[];
  selectedDraft: PostDraftType | null;
  setDrafts: (list: PostDraftType[]) => void;
  deleteDraft: (id: number) => void;
  setDraft: (selectedDraft: PostDraftType) => void;
};

export const useDraftStore = create<DraftStore>((set) => ({
  drafts: [],
  selectedDraft: null,
  setDrafts: (list) => set({ drafts: list }),
  deleteDraft: (id) =>
    set((state) => ({
      drafts: state.drafts.filter((draft) => draft.id !== id),
    })),
  setDraft: (selectedDraft) => set({ selectedDraft: selectedDraft }),
}));
