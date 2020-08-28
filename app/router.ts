import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';
// https://cnodejs.org/topic/5b303eb0ac8bc1e1241143ba
export default (app: Application) => {
  EggShell(app, { prefix: '/' });
};
