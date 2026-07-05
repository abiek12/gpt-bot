import Header from "./Header/Header";
import EmptyState from "./Message/EmptyState";
import MessageList from "./Message/MessageList";
import { useChatStore } from "../../stores/chat.store";

const ChatArea = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <section className="flex flex-col h-full bg-background">
      <Header />

      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {messages.length === 0 ? <EmptyState /> : <MessageList />}
      </main>
    </section>
  );
};

export default ChatArea;
