import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import characters from '../../data/characters.json';
import { getReply } from '../../utils/getReply';
import ChatBubble from '../../components/ChatBubble';
import MessageInput from '../../components/MessageInput';

interface Message {
  text: string;
  sender: 'user' | 'character';
}

export default function ChatPage() {
  const router = useRouter();
  const { name } = router.query;
  const character = characters.find(c => c.id === name);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (character) {
      setMessages([{ sender: 'character', text: character.intro }]);
    }
  }, [character]);

  const handleSend = (input: string) => {
    if (!character) return;
    const userMessage: Message = { sender: 'user', text: input };
    const reply = getReply(character.id, input);
    const characterMessage: Message = { sender: 'character', text: reply };
    setMessages(prev => [...prev, userMessage, characterMessage]);
  };

  if (!character) return <div className="p-4">존재하지 않는 정비사입니다.</div>;

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none px-4 py-3 text-lg font-bold border-b">
        {character.name}와의 대화
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#FAFAFA]">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg.text} sender={msg.sender} color={character.color} />
        ))}
      </div>
      <div className="flex-none border-t">
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}

