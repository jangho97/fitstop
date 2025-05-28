
import React, { useState } from 'react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex gap-2 p-2">
      <input
        type="text"
        className="flex-grow px-3 py-2 rounded-md border border-gray-300 text-sm"
        placeholder="고민을 입력해보세요..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold"
        onClick={handleSend}
      >
        전송
      </button>
    </div>
  );
};

export default MessageInput;
