import { rootPath } from '@k-workspace/utils';
import { readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

const PROJECTS_DATA_PATH = rootPath('/data/projects.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const getJsonData = readFileSync(PROJECTS_DATA_PATH);
  res.status(200).json(getJsonData);
}
