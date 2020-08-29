import { Service } from 'egg';

export default class User extends Service {
  // 使用 gitlab api 获取 access_token
  public async getUserToken({ username, password }) {
    const { data: token } = await this.ctx.helper.utils.http.post({
      url: '/oauth/token',
      params: {
        grant_type: 'password',
        username,
        password,
      },
    });
    if (token && token.access_token) {
      return token;
    }
    return false;
  }
  // 使用 gitlab api 获取 gitlab 用户信息
  public async getUserInfo({ accessToken }) {
    const userInfo = await this.ctx.helper.api.gitlab.user.getUserInfo({
      accessToken,
    });
    return userInfo;
  }
  // 用户信息落库
  public async saveUser({ userInfo }) {
    const { ctx } = this;
    const {
      id,
      name,
      username,
      email,
      avatar_url: avatarUrl,
      web_url: webUrl,
    } = userInfo;
    // 查询用户是否已经落库
    const exist = await ctx.model.User.findOne({
      where: {
        id,
      },
      raw: true,
    });
    if (exist) return;

    // 创建用户信息
    ctx.model.User.create({
      id,
      name,
      username,
      email,
      avatarUrl,
      webUrl,
    });
  }
}
