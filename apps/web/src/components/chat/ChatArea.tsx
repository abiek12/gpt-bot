import Header from "./Header/Header";
import EmptyState from "./Message/EmptyState";

const ChatArea = () => {
  return (
    <section className="flex flex-col h-full bg-background">
      <Header />

      <main className="flex-1 overflow-y-auto">
        <EmptyState />
      </main>
    </section>
  );
};

export default ChatArea;
