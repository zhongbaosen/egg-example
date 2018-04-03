'use strict';

const Controller = require('egg').Controller;

const createRule = {
  username: {
    type: 'email',
  },
  password: {
    type: 'password',
    compare: 're-password',
  },
};

class UserController extends Controller {
  async info() {
    const userId = this.ctx.params.id;
    const userInfo = await this.ctx.service.user.find(userId);
    this.ctx.body = userInfo;
  }

  async deal() {
    this.ctx.validate(createRule);
    this.ctx.logger.info('some request data: %j', this.ctx.request.body);
    this.ctx.body = this.ctx.request.body;
  }
}
module.exports = UserController;
