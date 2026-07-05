import type { Message } from "../../types/chat";

const conversationId = crypto.randomUUID();

export const mockMessage: Message[] = [
  {
    id: crypto.randomUUID(),
    role: "user",
    content: "Hi, how are you?",
    conversationId,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content: "Hey there! I'm doing great. How can I help you today?",
    conversationId,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    role: "user",
    content:
      "I'm building a ChatGPT clone using React, Bun, Zustand, Tailwind CSS v4, shadcn/ui, and Turborepo. I want the UI to feel as polished as ChatGPT, including responsive layouts, smooth scrolling, reusable components, and proper state management. Can you give me some advice on how to structure the frontend?",
    conversationId,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content:
      "That's a great stack for a modern AI application. I recommend starting with a solid component architecture before worrying about backend integration. Keep your UI components reusable, separate presentation from business logic, and avoid putting everything into one component. Use Zustand only for shared application state such as messages, conversations, and loading states. Local UI concerns like input values or modal visibility should remain inside the component using React's useState.",
    conversationId,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    role: "user",
    content:
      "Can you also explain why semantic colors are preferred over hardcoded Tailwind classes like bg-black or text-white? I'm trying to understand design systems better.",
    conversationId,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content:
      "Semantic colors make your application easier to maintain because components describe their purpose instead of their appearance. For example, using 'bg-background' means the component will automatically adapt when switching between light and dark themes. If you hardcode 'bg-black', you'll need to manually update every component when introducing theming. Design systems rely heavily on semantic tokens because they separate design decisions from implementation details.",
    conversationId,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    role: "user",
    content:
      "Awesome! One last thing — could you give me a really long paragraph so I can test how my message bubbles wrap across multiple lines, how spacing looks, and whether scrolling behaves correctly when there are several large messages displayed one after another?",
    conversationId,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content:
      "Certainly! Imagine you're building an AI-powered chat application intended for thousands of users every day. The interface should remain clean, readable, and responsive regardless of how much content appears in a conversation. Long messages should wrap naturally without overflowing their container, preserve comfortable line heights for readability, and maintain consistent padding around the text. As conversations grow, only the message area should become scrollable while the header and input remain fixed in place. This creates a predictable user experience that feels smooth and intuitive. It's also important to test extremely long paragraphs because they often expose layout issues such as improper width constraints, inconsistent spacing, missing word wrapping, or unexpected horizontal scrolling. By testing with realistic content instead of short placeholder text, you'll discover UI problems much earlier in development and end up with a much more polished chat experience.",
    conversationId,
    createdAt: new Date(),
  },
];
