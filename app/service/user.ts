import { Service } from 'egg';

export default class User extends Service {
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
}
