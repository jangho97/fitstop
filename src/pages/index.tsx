import React from 'react';
import { useRouter } from 'next/router';

const checklist = [
  "말씀과 기도에 힘이 빠져 있다",
  "전도나 사명에 대한 부담이 있다",
  "사람들과의 관계에 어려움이 있다",
  "내가 어떤 사람인지 모호하다",
  "지체들과 모이는 것이 부담된다"
];

export default function IntroPage() {
  const router = useRouter();
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggle = (item: string) => {
    setSelected(prev =>
      prev.includes(item) ? prev.filter(v => v !== item) : [...prev, item]
    );
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-xl font-bold mb-4 text-center">당신의 현재 상태를 체크해보세요</h1>
      <ul className="space-y-2 mb-6">
        {checklist.map((item, idx) => (
          <li
            key={idx}
            onClick={() => toggle(item)}
            className={`p-3 border rounded cursor-pointer transition ${
              selected.includes(item)
                ? 'bg-black text-white border-black'
                : 'bg-gray-100 text-gray-700 border-gray-300'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        className="block mx-auto px-6 py-2 bg-black text-white rounded font-semibold"
        onClick={() => router.push('/select')}
      >
        정비사 선택하러 가기
      </button>
    </div>
  );
}

