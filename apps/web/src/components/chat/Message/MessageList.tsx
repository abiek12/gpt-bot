import { useEffect, useRef } from "react";
import { useChatStore } from "../../../stores/chat.store";
import type { Message } from "../../../types/chat";
import GptMessage from "./GptMessage";
import MessageBubble from "./MessageBubble";

const MessageList = () => {
  const messages = useChatStore((state) => state.messages);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  return (
    <div className="container mx-auto max-w-3xl h-full flex flex-col justify-between py-4">
      {/* Message container */}
      <div className="message-container flex flex-col gap-8 pb-4">
        {messages.map((message: Message, idx) => (
          <div
            key={message.id}
            ref={idx === messages.length - 1 ? lastMessageRef : null}
          >
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
