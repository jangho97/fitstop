// src/pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message, characterId } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `${characterId} 정비사로서 성경적 위로와 실제적인 조언을 해주세요.` },
        { role: 'user', content: message },
      ],
    });

    const reply = completion.choices[0]?.message?.content || '죄송해요, 지금은 답변할 수 없어요.';
    res.status(200).json({ reply });
  } catch (err) {
    console.error('OpenAI 오류:', err);
    res.status(500).json({ error: 'OpenAI API 요청 실패' });
  }
}

