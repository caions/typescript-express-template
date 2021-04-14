import { Router, Request, Response } from 'express';
import { multerConfig } from './config/multer';
import multer from 'multer';

const routes = Router();

routes.post(
  '/upload',
  multer(multerConfig).single('file'),
  (request: Request, response: Response) => {
    return response.json(request.file);
  },
);

export default routes;
