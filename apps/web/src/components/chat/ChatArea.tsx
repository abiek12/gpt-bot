import Header from "./Header/Header";
import ChatInput from "./Input/ChatInput";
import EmptyState from "./Message/EmptyState";

const ChatArea = () => {
  return (
    <div>
      <Header />
      <EmptyState />
      <ChatInput />
    </div>
  );
};

export default ChatArea;
