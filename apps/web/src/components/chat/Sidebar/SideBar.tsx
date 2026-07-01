import ConversationItem from "./ConversationItem";
import NewChatButton from "./NewChatButton";

const SideBar = () => {
  return (
    <div>
      <div className="controls">
        <div className="logo">Logo</div>
        <div className="toggle">Toggle btn</div>
      </div>

      <div className="new-chat">
        <NewChatButton />
      </div>

      <div>
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
      </div>
    </div>
  );
};

export default SideBar;
