import { NotePencilIcon } from "@phosphor-icons/react";

const NewChatButton = () => {
  return (
    <div className="flex justify-start items-center gap-2 cursor-pointer px-2 py-4 bg-card hover:bg-sidebar-accent rounded-sm">
      <div className="">
        <NotePencilIcon size={20} weight="regular" />
      </div>

      <div className="">
        <p>New Chat</p>
      </div>
    </div>
  );
};

export default NewChatButton;
