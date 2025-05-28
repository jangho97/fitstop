import React from 'react';
import { useRouter } from 'next/router';

interface CharacterCardProps {
  id: string;
  name: string;
  keyword: string;
  color: string;
  profileImage: string;
  intro: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  keyword,
  color,
  profileImage,
  intro
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <div
      className="rounded-xl shadow-md p-4 cursor-pointer transition hover:scale-105"
      style={{ border: `2px solid ${color}` }}
      onClick={handleClick}
    >
      <img src={profileImage} alt={`${name} 프로필`} className="w-20 h-20 rounded-full mx-auto mb-2" />
      <h3 className="text-center text-lg font-bold mb-1">{name}</h3>
      <p className="text-center text-sm text-gray-500 mb-2">키워드: {keyword}</p>
      <p className="text-center text-sm text-gray-700">{intro}</p>
    </div>
  );
};

export default CharacterCard;

