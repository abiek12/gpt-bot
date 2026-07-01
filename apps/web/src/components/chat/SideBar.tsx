import ProfileCard from "../common/ProfileCard";
import SideBarLogo from "../common/SideBarLogo";
import ConversationItem from "./Sidebar/ConversationItem";
import NewChatButton from "./Sidebar/NewChatButton";

const SideBar = () => {
  return (
    <aside className="w-72 flex flex-col border-r border-sidebar-border bg-sidebar">
      <div className="p-4">
        <SideBarLogo />
      </div>

      <div className="p-4">
        <NewChatButton />
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
      </div>

      <div className="border-t border-sidebar-border p-4">
        <ProfileCard />
      </div>
    </aside>
  );
};

export default SideBar;
