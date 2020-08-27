import { Controller } from 'egg';
import { Post, Prefix } from 'egg-shell-decorators';

@Prefix('user')
export default class UserController extends Controller {
  @Post('/getUserToken')
  public async getUserToken() {
    const { ctx } = this;
    const { params } = ctx.body;
    const { username, password } = params;
    const userToken = await ctx.service.user.getUserToken({
      username,
      password,
    });
    ctx.body = userToken;
  }
}
