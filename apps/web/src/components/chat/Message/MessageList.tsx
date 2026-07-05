import { useChatStore } from "../../../stores/chat.store";
import type { Message } from "../../../types/chat";
import ChatInput from "../Input/ChatInput";
import GptMessage from "./GptMessage";
import MessageBubble from "./MessageBubble";

const MessageList = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="container mx-auto max-w-3xl h-full flex flex-col justify-between py-4">
      {/* Message container */}
      <div className="message-container flex flex-col gap-8 pb-40">
        {messages.map((message: Message) =>
          message.role === "user" ? (
            <MessageBubble key={message.id} message={message} />
          ) : (
            <GptMessage key={message.id} message={message} />
          ),
        )}
      </div>

      {/* Input container */}
      <div className="fixed w-full max-w-3xl bottom-0 pb-2 bg-background rounded-t-[32px]">
        <ChatInput conversationId={messages[0].conversationId} />
      </div>
    </div>
  );
};

export default MessageList;
