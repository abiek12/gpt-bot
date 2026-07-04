import { useChatStore } from "../../../stores/chat.store";
import ChatInput from "../Input/ChatInput";

const MessageList = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="container mx-auto max-w-3xl h-full flex flex-col justify-between py-4">
      {/* Message container */}
      <div className="message-container flex flex-col gap-16 pb-40">
        {/* My message */}
        <p className="bg-input p-4 px-6 rounded-3xl ml-auto max-w-fit">
          Hello how are you ?
        </p>

        {/* Agent message */}
        {messages.map((message) => (
          <p key={message.id} className="mr-auto max-w-fit">
            {message.content}
          </p>
        ))}
      </div>

      {/* Input container */}
      <div className="fixed w-full max-w-3xl bottom-0 pb-2 bg-background rounded-t-[32px]">
        <ChatInput />
      </div>
    </div>
  );
};

export default MessageList;
