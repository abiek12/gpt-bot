import type { Message } from "../../types/chat";

export const mockMessage: Message[] = [
  {
    id: crypto.randomUUID(),
    role: "user",
    content: "Hi, how are you?",
    conversationId: crypto.randomUUID(),
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content: "Hey there! Iam good, How can I help you today?",
    conversationId: crypto.randomUUID(),
    createdAt: new Date(),
  },
];
