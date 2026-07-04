import { useState } from "react";
import Header from "./Header/Header";
import EmptyState from "./Message/EmptyState";
import MessageList from "./Message/MessageList";

const ChatArea = () => {
  const [emptyState, setEmptyState] = useState(false);
  return (
    <section className="flex flex-col h-full bg-background">
      <Header />

      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {emptyState ? <EmptyState /> : <MessageList />}
      </main>
    </section>
  );
};

export default ChatArea;
