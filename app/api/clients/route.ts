import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    const fileData = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const data = JSON.parse(fileData);
    return NextResponse.json(data, { status: 200 });
}
