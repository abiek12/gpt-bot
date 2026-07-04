import { useState } from "react";
import Header from "./Header/Header";
import EmptyState from "./Message/EmptyState";

const ChatArea = () => {
  const [emptyState, setEmptyState] = useState(true);
  return (
    <section className="flex flex-col h-full bg-background">
      <Header />

      <main className="flex-1 overflow-y-auto">
        {emptyState ? (
          <EmptyState />
        ) : (
          <div>
            <h1>Hi</h1>
          </div>
        )}
      </main>
    </section>
  );
};

export default ChatArea;
