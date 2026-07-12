import { Hono } from "hono";
import { generateMessage } from "./chatbot";
import { cors } from "hono/cors"

const app = new Hono();

// Cors
app.use('*', cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/chat", async (c) => {
  const payload = await c.req.json();

  const response = await generateMessage(payload.userQuery);

  return c.json(response);
});

export default app;
