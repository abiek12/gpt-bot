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

      <div className="profile">
        <div className="icon">Icon</div>
        <div className="details">
          <div className="name">Abhishek pp</div>
          <div className="plan">Go</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
