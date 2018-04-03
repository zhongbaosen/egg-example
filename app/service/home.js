'use strict';

const Service = require('egg').Service;
class HomeService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
  constructor(ctx) {
    super(ctx);
    const { query, model } = ctx;
    this.data = query;
    this.db = model;
    this.result = {};
  }


  async find() {

    // if (!this.data.name) {
    //   return {
    //     status: '201',
    //     context: '没有名字',
    //   };
    // }

    const result = await this.db.query('select * from users where id = 1');

    const name = '周董';

    const result1 = await this.db.query(`update users set name = '${name}' where id = 1`);

    this.logger.info(result[0]);
    this.logger.info(result1[0]);
    // let result = this.db.Movie.build({ name: this.data.name }); // 插入数据(增)
    // try {
    //   result = await result.save();
    // } catch (e) {
    //   console.log(e);
    // }

    console.warn('结果是' + JSON.stringify(result[0]));
    // if (!this.data.uid) {
    //   this.result.status = '400';
    //   return this.result;
    // }
    // console.log(this.data.uid);
    // uid = this.data.uid;

    // console.log(result);

    return {
      status: '200',
      data: result[0],
    };
  }

}
module.exports = HomeService;
