import { create } from "zustand";


interface SidebarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSidebar = create<SidebarProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSidebar;
