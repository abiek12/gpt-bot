import { useEffect, useRef, useState } from "react";
import { PaperPlaneTiltIcon, PlusIcon } from "@phosphor-icons/react";
import { useChatStore } from "../../../stores/chat.store";

const ChatInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");
  const addMessages = useChatStore((state) => state.addMessage);

  const handleSubmit = () => {
    if (!input.trim()) return;

    addMessages({
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      conversationId: crypto.randomUUID(),
      createdAt: new Date(),
    });

    setInput("");
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const resize = () => {
      textarea.style.height = "0px";

      const height = Math.min(textarea.scrollHeight, 220);

      textarea.style.height = `${height}px`;
    };

    resize();

    textarea.addEventListener("input", resize);

    return () => textarea.removeEventListener("input", resize);
  }, []);

  return (
    <div
      className="
        w-full
        max-w-4xl
        rounded-[32px]
        border
        border-neutral-800
        bg-neutral-900
        px-5
        pt-4
        pb-3
        flex
        flex-col
      "
    >
      {/* Scroll Area */}
      <div className="overflow-hidden">
        <textarea
          ref={textareaRef}
          rows={1}
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            w-full
            resize-none
            overflow-y-auto
            bg-transparent
            outline-none
            text-white
            placeholder:text-neutral-500
            leading-7
            text-lg
            max-h-55
            pr-2
          "
        />
      </div>

      {/* Input Area */}
      <div className="mt-3 flex items-center justify-between">
        <button className="text-neutral-400 hover:text-white cursor-pointer">
          <PlusIcon size={22} />
        </button>

        <button
          className="
            h-10
            w-10
            rounded-full
            bg-primary
            flex
            items-center
            justify-center
            hover:bg-green-700
          "
          onSubmit={handleSubmit}
        >
          <PaperPlaneTiltIcon
            size={18}
            weight="fill"
            className="text-white cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
