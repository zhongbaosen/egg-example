'use strict';

const moment = require('moment');
const Service = require('egg').Service;

class TokenService extends Service {
  async fetchOne(id) {
    const token = await this.ctx.model.Token.find({
      where: { id },
    });
    return token;
  }
  async genToken(userId, ip) {
    const expire = new Date(moment().add(1, 'days'));
    const token = await this.ctx.model.Token.create({ expire, ip, user: userId, valid: true });
    return token;
  }
}

module.exports = TokenService;
