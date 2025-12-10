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
    <div className="mt-6 flex gap-3">
      <input
        type="text"
        className="flex-1 bg-darkbg-secondary border border-darkbg-panel rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-warm transition"
        placeholder="Escribe un mensaje..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        className="px-6 py-3 bg-warm text-white rounded-xl hover:bg-warm-light transition font-medium"
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatInput;
