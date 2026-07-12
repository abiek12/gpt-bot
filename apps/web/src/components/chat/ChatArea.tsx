import Header from "./Header/Header";
import EmptyState from "./Message/EmptyState";
import MessageList from "./Message/MessageList";
import { useChatStore } from "../../stores/chat.store";
import ChatInput from "./Input/ChatInput";

const ChatArea = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <section className="flex flex-col h-full bg-background">
      <Header />

      <main className="flex-1 overflow-hidden">
        {messages.length === 0 ? <EmptyState /> : <MessageList />}
      </main>

      {
        messages.length > 0 && (
          <footer className="bg-background p-2">
            <div className="mx-auto w-full max-w-3xl">
              <ChatInput />
            </div>
          </footer>
        )
      }
    </section>
  );
};

export default ChatArea;
