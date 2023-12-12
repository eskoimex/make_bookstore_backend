
import { Request } from 'express';
import { validationResult } from 'express-validator';

export const checkError = (req: Request) => {
  const errors = validationResult(req);
  return errors;
};

