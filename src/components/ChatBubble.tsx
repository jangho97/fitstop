import React from 'react';

interface Props {
  message: string;
  sender: 'user' | 'character';
  color: string;
}

const ChatBubble = ({ message, sender, color }: Props) => {
  return (
    <div
      className={`max-w-[75%] px-4 py-2 rounded-xl ${
        sender === 'user'
          ? 'bg-gray-200 self-end'
          : 'text-white self-start'
      }`}
      style={sender === 'character' ? { backgroundColor: color } : {}}
    >
      {message}
    </div>
  );
};

export default ChatBubble;

