import React from 'react';
import { useRouter } from 'next/router';

export default function EndPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F0F0F0] p-6">
      <h1 className="text-2xl font-bold mb-4">정비 완료!</h1>
      <p className="text-center text-gray-700 mb-6">
        지금은 잠시 멈춰선 순간일 뿐이에요. <br />
        다시 엔진을 켜고 달릴 준비가 되셨습니다 🚗💨
      </p>
      <button
        className="px-6 py-2 bg-black text-white rounded font-semibold"
        onClick={() => router.push('/')}
      >
        처음으로 돌아가기
      </button>
    </div>
  );
}

