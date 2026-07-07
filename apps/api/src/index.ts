import { Hono } from "hono";
import { generateMessage } from "./chatbot";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/chat", async (c) => {
  const payload = await c.req.json();

  const response = await generateMessage(payload.userQuery);

  return c.json(response);
});

export default app;
