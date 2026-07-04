import type { Message } from "../../types/chat";

export const mockMessage: Message[] = [
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content: "Hello, how can I help you today?",
    conversationId: crypto.randomUUID(),
    createdAt: new Date(),
  },
];
