import { create } from 'zustand';

type CommentStore = {
  trigger: number;
  triggerRefresh: () => void;
};

export const useCommentStore = create<CommentStore>((set) => ({
  trigger: 0,
  triggerRefresh: () => set((state) => ({ trigger: state.trigger + 1 })),
}));
