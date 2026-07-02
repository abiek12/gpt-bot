import ProfileCard from "../common/ProfileCard";
import SideBarLogo from "../common/SideBarLogo";
import ConversationItem from "./Sidebar/ConversationItem";
import NewChatButton from "./Sidebar/NewChatButton";

const SideBar = () => {
  return (
    <aside className="w-72 h-full flex flex-col border-r border-sidebar-border bg-sidebar text-sm">
      <div className="p-4">
        <SideBarLogo />
      </div>

      <div className="px-4 py-2">
        <NewChatButton />
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
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
