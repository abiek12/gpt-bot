import { create } from "zustand";
import type { Message } from "../types/chat";

interface ChatStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessage: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  clearMessage: () =>
    set({
      messages: [],
    }),
}));
