import { useRef } from "react";
import { PaperPlaneTiltIcon, PlusIcon } from "@phosphor-icons/react";
import { Button } from "../../ui/button";

const ChatInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "0px";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  };

  return (
    <div className="w-full max-w-4xl rounded-full border border-border bg-card px-3 py-2 shadow-sm flex items-center gap-2">
      {/* Left Button */}
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 rounded-full cursor-pointer"
      >
        <PlusIcon size={20} />
      </Button>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        rows={1}
        placeholder="Ask anything"
        onInput={handleInput}
        className="
          flex-1
          resize-none
          overflow-y-auto
          overflow-x-hidden
          bg-transparent
          py-2
          text-base
          leading-6
          outline-none
          placeholder:text-muted-foreground
          max-h-50
        "
      />

      {/* Send Button */}
      <Button size="icon" className="shrink-0 rounded-full cursor-pointer">
        <PaperPlaneTiltIcon size={18} weight="fill" />
      </Button>
    </div>
  );
};

export default ChatInput;
