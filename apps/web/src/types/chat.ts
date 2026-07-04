export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  conversationId: string;
  createdAt: Date;
}
