import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-darkbg-primary text-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-darkbg-panel px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide">Azure AI Chat</h1>
        <button className="px-4 py-2 rounded-xl bg-warm hover:bg-warm-light transition">
          Nuevo chat
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-3xl px-4 py-8">{children}</div>
      </main>
    </div>
  );
}
