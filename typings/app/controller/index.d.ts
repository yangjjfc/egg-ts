// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProject from '../../../app/controller/project';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    project: ExportProject;
    user: ExportUser;
  }
}
