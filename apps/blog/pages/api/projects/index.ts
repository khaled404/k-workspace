import type { NextApiRequest, NextApiResponse } from 'next';
import projects from '../data/projects';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
