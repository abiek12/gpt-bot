import z from "zod";

export const ChatRequestSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Message can't be empty!")
    .max(10000, "Message can't be long!")
})

export type ChatRequest = z.infer<typeof ChatRequestSchema>;
