import { Controller } from 'egg';
import { Post, Prefix } from 'egg-shell-decorators';

@Prefix('project')
export default class ProjectController extends Controller {
  @Post('/getProjectList')
  public async getProjectList() {
    const { ctx } = this;
    const { params } = ctx.body;
    const { pageSize, pageNum, accessToken } = params;
    const projectList = await ctx.service.project.getProjectList({
      pageSize,
      pageNum,
      accessToken,
    });
    ctx.body = projectList;
  }
}
