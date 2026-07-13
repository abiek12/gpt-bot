import { create } from "zustand";
import type { Message } from "../types/chat";
import { ChatStatus } from "../utils/constants/chat-status";

interface ChatStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessage: () => void;
  chatStatus: ChatStatus;
  setChatStatus: (status: ChatStatus) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  chatStatus: ChatStatus.Idle,

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  clearMessage: () =>
    set({
      messages: [],
    }),

    setChatStatus: (chatStatus) => set({chatStatus})
}));
