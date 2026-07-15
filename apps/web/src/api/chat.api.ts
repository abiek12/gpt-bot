import { ChatRequestSchema, ChatResponseSchema } from "@repo/shared";

const API_URL = import.meta.env.VITE_API_URL;

export const sendMessage = async (message: string, conversationId: string) => {
  // Request Validation
  const request = ChatRequestSchema.parse({message, conversationId});

  const res = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(request)
  });

  if (!res.ok) {
    throw new Error("Failed to send message!")
  }

  const resJson = await res.json();

  // Response Validation
  return ChatResponseSchema.parse(resJson);
}
