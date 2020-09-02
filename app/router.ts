import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';
// https://cnodejs.org/topic/5b303eb0ac8bc1e1241143ba
export default (app: Application) => {
  // const { io } = app;

  EggShell(app, { prefix: '/' });

  // socket.io
  // io.of('/').route('server', io.controller.nsp.ping);
};
