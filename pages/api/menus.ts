import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_DB_SECRET });
const databaseID = process.env.NEXT_PUBLIC_DB_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await notion.databases.query({
      database_id: databaseID || '',
    });
    if (!response) {
      return res.status(400).json({
        ok: false,
        message: '데이터 베이스를 불러오는데 실패했습니다.',
      });
    }
    return res.status(200).json({
      ok: true,
      message: '데이터 베이스를 불러오는데 성공했습니다.',
      response,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
}
