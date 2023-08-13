import { create } from "zustand";

interface SidebarProps {
  question: string;
  placeholder: string;
  onAsk: (request: string) => void;
  onReset: () => void
}

const useContactForm = create<SidebarProps>((set) => ({
  question: "",
  placeholder: "Ваше повідомлення",
  onAsk: (request: string) =>
    set({
      question: `Мене цікавить ${request}, зв'яжіться будь-ласка зі мною.`,
    }),
  onReset: () => set({ placeholder: "Ваше повідомлення", question: '' }),
}));

export default useContactForm;
