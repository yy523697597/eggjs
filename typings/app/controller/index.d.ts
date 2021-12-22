// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEthan from '../../../app/controller/ethan';
import ExportGirlsManager from '../../../app/controller/girlsManager';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    ethan: ExportEthan;
    girlsManager: ExportGirlsManager;
    home: ExportHome;
  }
}
