import { Hono } from "hono";
import { generateMessage } from "./chatbot";
import { cors } from "hono/cors"
import { ChatRequestSchema, ChatResponse } from "@repo/shared";

const app = new Hono();

// Cors
app.use('*', cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/chat", async (c) => {
  const payload = await c.req.json();
  const validations = ChatRequestSchema.safeParse(payload);

  if (!validations.success) {
    return c.json(
       {
         success: false,
         statusCode: 400,
         data: null,
         error: {
           message: "Validation failed",
           details: validations.error.flatten(),
         },
       },
       400,
     );
  }

  const { message } = validations.data;
  const result = await generateMessage(message);
  const response: ChatResponse = {
    success: true,
    statusCode: 200,
    data: result,
    error: null
  }

  return c.json(response);
});

export default app;
