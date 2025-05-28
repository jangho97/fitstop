import React from 'react';

type Props = {
  text: string;
  isUser?: boolean;
};

export default function ChatBubble({ text, isUser = false }: Props) {
  return (
    <div
      style={{
        maxWidth: '80%',
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? '#E2E2E2' : '#FFFBE6',
        borderRadius: '16px',
        padding: '10px 14px',
        margin: '4px 0',
        fontSize: '14px',
        lineHeight: '1.6',
        whiteSpace: 'pre-wrap'
      }}
    >
      {text}
    </div>
  );
}

