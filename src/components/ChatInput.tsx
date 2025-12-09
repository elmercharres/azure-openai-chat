import React, { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

const ChatInput: React.FC<Props> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() === "") return;
    onSend(text);
    setText("");
  };

  return (
    <div className="mt-4 flex gap-2">
      <input
        type="text"
        className="flex-1 border border-gray-400 rounded px-3 py-2"
        placeholder="Escribe un mensaje..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatInput;
