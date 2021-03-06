// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler from '../../../app/middleware/errorHandler';
import ExportJwtAuth from '../../../app/middleware/jwtAuth';

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    jwtAuth: typeof ExportJwtAuth;
  }
}
