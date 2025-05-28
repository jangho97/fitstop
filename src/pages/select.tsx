import React from 'react';
import characters from '../data/characters.json';
import CharacterCard from '../components/CharacterCard';

export default function SelectPage() {
  return (
    <div className="min-h-screen p-6 bg-[#F7F7F7]">
      <h1 className="text-xl font-bold mb-4 text-center">정비사를 선택해주세요</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {characters.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
    </div>
  );
}

