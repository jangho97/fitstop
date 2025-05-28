import characters from '../data/characters.json';
import verses from '../data/verses.json';

export function getReply(characterId: string, userInput: string) {
  const character = characters.find(c => c.id === characterId);
  if (!character) {
    return "정비사가 준비되지 않았어요. 다른 인물을 선택해 주세요.";
  }

  const matchedVerse = verses.find(v => v.characterId === characterId);
  const verseText = matchedVerse
    ? `

📖 ${matchedVerse.verse}
"${matchedVerse.text}"
(${matchedVerse.context})`
    : "";

  return `${character.name}: 고민을 나눠줘서 고마워요. ${character.keyword}에 대해 얘기해볼까요?${verseText}`;
}

