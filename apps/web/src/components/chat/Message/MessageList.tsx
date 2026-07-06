import { useEffect, useRef } from "react";
import type { Message } from "../../../types/chat";
import GptMessage from "./GptMessage";
import MessageBubble from "./MessageBubble";
import { useChatStore } from "../../../stores/chat.store";

const MessageList = () => {
  const messages = useChatStore((state) => state.messages);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto overflow-x-hidden scrollbar-chat"
    >
      <div className="mx-auto w-full max-w-3xl space-y-8 py-6">
        {messages.map((message: Message) => (
          <div key={message.id}>
            {message.role === "user" ? (
              <MessageBubble message={message} />
            ) : (
              <GptMessage message={message} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
