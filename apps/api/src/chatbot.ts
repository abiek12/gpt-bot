import Groq from "groq-sdk";
import { tavily } from "@tavily/core";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

export const generateMessage = async (userQuery: string) => {
  const messages: any = [
    {
      role: "system",
      content: `You're a smart personal assistant who answer the asked questions.
        You have access to following tools:
          1. webSearch({query}): {query: string} // Search the latest information and real time data from the internet.
          Current Date and Time: ${new Date().toUTCString()}
      `,
    },
  ];

  const tools = [
    {
      type: "function",
      function: {
        name: "webSearch",
        description:
          "Search the latest information and real time data from the internet.",
        parameters: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search query to perform search on",
            },
          },
          required: ["query"],
        },
      },
    },
  ];

  messages.push({
    role: "user",
    content: userQuery,
  });

  while (true) {
    const completions1 = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0,
      messages: messages,
      tools: tools,
      tool_choice: "auto",
    });
    messages.push(completions1.choices[0].message);

    const toolCalling = completions1.choices[0].message.tool_calls;
    if (!toolCalling) {
      return completions1.choices[0].message.content;
    }
    console.log("Tool calling...");

    for (const tool of toolCalling) {
      const functionName = tool.function.name;
      const functionParams = JSON.parse(tool.function.arguments);

      switch (functionName) {
        case "webSearch":
          const toolResult = await webSearch(functionParams);
          messages.push({
            tool_call_id: tool.id,
            role: "tool",
            name: functionName,
            content: toolResult,
          });
          break;
        default:
          console.log("Unknown tool");
          break;
      }
    }
  }
};

const webSearch = async ({ query }: any) => {
  try {
    // Web search api call
    const response = await tvly.search(query);

    const finalResult = response.results
      .map((item) => item.content)
      .join("\n\n");

    return finalResult;
  } catch {
    console.error("Error while web searching...");
    throw new Error("Error while web search tool calling!");
  }
};
