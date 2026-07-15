import z from "zod";

export const ChatRequestSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Message can't be empty!")
    .max(10000, "Message can't be long!"),
  conversationId: z
    .string()
    .trim()
})

export type ChatRequest = z.infer<typeof ChatRequestSchema>;


export const ChatResponseSchema = z.object({
  success: z.boolean(),
  statusCode: z.number(),
  data: z.string().nullable(),
  error: z.string().nullable()
})

export type ChatResponse = z.infer<typeof ChatResponseSchema>;
