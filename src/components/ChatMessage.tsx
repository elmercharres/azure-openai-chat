import React from "react";
import { type ChatMessage as ChatMessageType } from "../types";

interface Props {
  message: ChatMessageType;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`p-3 rounded-lg max-w-[80%] ${
        isUser ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-gray-800"
      }`}
      style={{ alignSelf: isUser ? "flex-end" : "flex-start" }}
    >
      {message.text}
    </div>
  );
};

export default ChatMessage;
