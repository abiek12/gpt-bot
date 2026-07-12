import React, { useEffect, useRef, useState } from "react";
import { PaperPlaneTiltIcon, PlusIcon } from "@phosphor-icons/react";
import { useChatStore } from "../../../stores/chat.store";
import { sendMessage } from "../../../api/chat.api";

const ChatInput = ({ conversationId }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");
  const addMessages = useChatStore((state) => state.addMessage);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    addMessages({
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      conversationId,
      createdAt: new Date(),
    });

    // clear input
    setInput("");

    // Api call
    const result = await sendMessage({userQuery: input})

    // Append gpt message
    addMessages({
      id: crypto.randomUUID(),
      role: 'assistant',
      content: result,
      conversationId,
      createdAt: new Date()
    });

  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== "Enter") return;
    if (e.shiftKey) return;
    e.preventDefault();
    if (!input.trim()) return;
    handleSubmit();
  };

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "0px";

    textarea.style.height = `${Math.min(textarea.scrollHeight, 220)}px`;
  }, [input]);

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
          onKeyDown={handleKeyDown}
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
          onClick={handleSubmit}
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
