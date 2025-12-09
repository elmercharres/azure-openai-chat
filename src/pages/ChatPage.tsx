import React, { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hola 👋 ¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  };

  return (
    <div className="space-y-6">

      {/* Chat Bubbles */}
      <div className="space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl max-w-[80%] ${
              msg.role === "user"
                ? "ml-auto bg-darkbg-secondary border border-darkbg-panel"
                : "mr-auto bg-darkbg-secondary border-l-4 border-warm"
            }`}
          >
            <p className="text-sm text-gray-200 leading-relaxed">
              {msg.content}
            </p>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-3 mt-4">
        <input
          type="text"
          placeholder="Escribe tu mensaje…"
          className="flex-1 bg-darkbg-secondary border border-darkbg-panel p-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-warm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="px-5 py-3 bg-warm hover:bg-warm-light rounded-xl font-semibold transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
