import { OpenAiLogoIcon } from "@phosphor-icons/react";
import { SidebarSimpleIcon } from "@phosphor-icons/react/dist/ssr";

const SideBarLogo = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="logo">
        <OpenAiLogoIcon size={28} weight="light" />
      </div>
      <div className="cursor-pointer">
        <SidebarSimpleIcon size={20} weight="thin" />
      </div>
    </div>
  );
};

export default SideBarLogo;
