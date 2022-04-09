import { FooterProps, NavbarProps } from '@k-workspace/shared/ui';
import { getFileParser } from '../../utils/data-provider/data-provider';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const navbar = getFileParser<NavbarProps>('navbar');
  const footer = getFileParser<FooterProps>('footer');
  res.status(200).json({ navbar, footer });
}
