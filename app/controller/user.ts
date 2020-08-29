import { Post, Prefix, Get } from 'egg-shell-decorators';
import BaseController from './base';
@Prefix('user')
export default class UserController extends BaseController {
  // @Post('/getUserToken')
  // public async getUserToken() {
  //   const { ctx } = this;
  //   const { params } = ctx.body;
  //   const { username, password } = params;
  //   const userToken = await ctx.service.user.getUserToken({
  //     username,
  //     password,
  //   });
  //   console.log('UserController -> getUserToken -> userToken', userToken);
  //   ctx.body = userToken;
  // }

  @Post('/getUserToken')
  public async getUserToken({
    request: {
      body: { params },
    },
  }) {
    const { ctx, app } = this;
    const { username, password } = params;
    const userToken = await ctx.service.user.getUserToken({
      username,
      password,
    });
    const userInfo = await ctx.service.user.getUserInfo({
      accessToken: userToken.access_token,
    });
    ctx.service.user.saveUser({
      userInfo,
    });
    const token = app.jwt.sign(
      {
        userToken,
        userInfo,
      },
      app.config.jwt.secret,
    );
    ctx.set({ authorization: token }); // 设置 headers
    this.success(userInfo);
  }

  @Get('/:id')
  public async getUser() {
    const { ctx } = this;
    ctx.body = 'dasd';
  }
}
