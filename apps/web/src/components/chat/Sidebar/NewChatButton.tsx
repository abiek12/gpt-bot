import { NotePencilIcon } from "@phosphor-icons/react";

const NewChatButton = () => {
  return (
    <div className="flex justify-start items-center gap-2 cursor-pointer">
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
