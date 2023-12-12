import { RequestHandler, Request, Response } from 'express';

const ping: RequestHandler = (req: Request, res: Response) => {
  res.json({ msg: 'Health Check OK' });
};

export default { ping };
