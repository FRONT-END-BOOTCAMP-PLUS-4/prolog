import { create } from 'zustand';
import { type ReactElement } from 'react';

type PositionState = 'left' | 'top' | 'right' | 'bottom' | 'center';

type ModalState = {
  isChildren: null | ReactElement;
  position: PositionState;
};

type ModalAction = {
  action: {
    open: (children: ReactElement, position?: PositionState) => void;
    close: () => void;
  };
};

export const useModalStore = create<ModalState & ModalAction>((set) => ({
  isChildren: null,
  position: "bottom",

  action: {
    open: (children, position = "bottom") => {
      set({ position, isChildren: children });
    },
    close: () => {
      set({ isChildren: null });
    }
  },
}));