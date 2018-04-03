'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  name: { type: 'string' },
};


class HomeController extends Controller {
  async get() {
    console.log('123456');
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, ctx.query);
    const serviceRes = await ctx.service.home.find();
    ctx.body = serviceRes;
  }

  async post() {
    const ctx = this.ctx;
    ctx.logger.info('some request data: %j', ctx.request.body);
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, ctx.request.body);
    const serviceRes = await ctx.service.home.find();
    ctx.body = serviceRes;
  }
}

module.exports = HomeController;
