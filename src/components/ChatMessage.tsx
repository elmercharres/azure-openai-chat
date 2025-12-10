import React from "react";
import { type ChatMessage as ChatMessageType } from "../types";

interface Props {
  message: ChatMessageType;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`p-4 rounded-xl max-w-[80%] ${
        isUser 
          ? "bg-warm text-white self-end rounded-br-none" 
          : "bg-darkbg-secondary text-white self-start rounded-bl-none border border-darkbg-panel"
      }`}
      style={{ alignSelf: isUser ? "flex-end" : "flex-start" }}
    >
      {message.text}
    </div>
  );
};

export default ChatMessage;
