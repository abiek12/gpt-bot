import { GearIcon } from "@phosphor-icons/react";
import { Button } from "../../ui/button";

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b border-border px-6">
      <div className="left-section flex flex-col gap-1">
        <h1 className="text-lg font-semibold">New Chat</h1>

        <p className="text-sm text-muted-foreground">GPT BOT</p>
      </div>
      <div className="right-section">
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <GearIcon size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
