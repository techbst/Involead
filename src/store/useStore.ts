import { create } from 'zustand';

type State = {
  sidebarOpen: boolean;
  setSidebar: (open: boolean) => void;
};

export const useStore = create<State>((set) => ({
  sidebarOpen: false,
  setSidebar: (open) => set({ sidebarOpen: open }),
}));
