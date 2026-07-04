import ChatInput from "../Input/ChatInput";

const MessageList = () => {
  return (
    <div className="container mx-auto max-w-3xl h-full flex flex-col justify-between py-4">
      {/* Message container */}
      <div className="message-container flex flex-col gap-16">
        {/* My message */}
        <p className="bg-input p-4 px-6 rounded-3xl ml-auto max-w-fit">
          Hello how are you ?
        </p>

        {/* Agent message */}
        <p className="mr-auto max-w-fit">
          Hey there! Iam good, How can i help you ?
        </p>
      </div>

      {/* Input container */}
      <div className="">
        <ChatInput />
      </div>
    </div>
  );
};

export default MessageList;
