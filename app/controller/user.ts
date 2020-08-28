import { Controller } from 'egg';
import { Post, Prefix, Get } from 'egg-shell-decorators';

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
    console.log('UserController -> getUserToken -> userToken', userToken);
    ctx.body = userToken;
  }
  @Get('/:id')
  public async getUser() {
    const { ctx } = this;
    ctx.body = 'dasd';
  }
}
