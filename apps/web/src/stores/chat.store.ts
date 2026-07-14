import { create } from "zustand";
import type { Message } from "../types/chat";

interface ChatStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessage: () => void;
  chatLoading: boolean;
  setChatLoading: (value: boolean) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  chatLoading: false,

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  clearMessage: () =>
    set({
      messages: [],
    }),

    setChatLoading: (chatLoading: boolean) => set({chatLoading})
}));
