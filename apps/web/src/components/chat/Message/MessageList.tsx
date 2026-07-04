import ChatInput from "../Input/ChatInput";

const MessageList = () => {
  return (
    <div className="container mx-auto max-w-3xl h-full flex flex-col justify-between">
      {/* Message container */}
      <div className="message-container">
        <p>Hello how are you </p>

        <p>Hello how are you </p>
      </div>

      {/* Input container */}
      <div className="">
        <ChatInput />
      </div>
    </div>
  );
};

export default MessageList;
