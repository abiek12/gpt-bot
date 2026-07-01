import ChatArea from "../components/chat/ChatArea";
import SideBar from "../components/chat/SideBar";

const ChatPage = () => {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <SideBar />
      <div className="flex-1">
        <ChatArea />
      </div>
    </div>
  );
};

export default ChatPage;
