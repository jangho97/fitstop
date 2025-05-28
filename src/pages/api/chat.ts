import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, 
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, characterId } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `${characterId} 정비사로서 신앙적인 조언을 해주세요. 위로와 실천적인 성경 기반 메시지를 담아주세요.`,
        },
        { role: 'user', content: message },
      ],
    });

    const reply = completion.data.choices[0].message?.content || '응답이 없습니다.';
    res.status(200).json({ reply });
  } catch (error: any) {
    console.error('OpenAI 오류:', error);
    res.status(500).json({ error: 'OpenAI 응답 실패' });
  }
}
