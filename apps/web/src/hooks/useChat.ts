import { useEffect } from "react"
import { sendMessage } from "../api/chat.api";

const useChat = async (userQuery: string) => {
  useEffect(() => {
    if (userQuery.trim()) return;

    const result = await sendMessage({userQuery})

    gptCall();
  }, [userQuery])
}
