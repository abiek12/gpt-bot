import ProfileCard from "../common/ProfileCard";
import SideBarLogo from "../common/SideBarLogo";
import ConversationItem from "./Sidebar/ConversationItem";
import NewChatButton from "./Sidebar/NewChatButton";

const SideBar = () => {
  return (
    <aside>
      <SideBarLogo />

      <NewChatButton />

      <div>
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
      </div>

      <ProfileCard />
    </aside>
  );
};

export default SideBar;
