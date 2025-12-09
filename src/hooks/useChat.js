import { useState } from "react";
import { sendChatMessage } from "../services/openaiService";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    const userMessage = { role: "user", text };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await sendChatMessage(text);

      const assistantMessage = { role: "assistant", text: response.reply };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Error: No se pudo procesar la solicitud." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, sendMessage };
}
