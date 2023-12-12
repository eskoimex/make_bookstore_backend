import { RequestHandler, Request, Response } from 'express';

export const ping: RequestHandler = (req: Request, res: Response) => {
  res.json({ msg: 'Health Check OK' });
};

export default  {ping} ;
