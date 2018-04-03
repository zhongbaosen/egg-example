'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const prefix = app.config.noPrefix ? '' : '/api/v1';
  const { router, controller } = app;
  router.post(`${prefix}/auth/register`, controller.auth.register);
  router.post(`${prefix}/auth/login`, controller.auth.login);
  router.post('/', controller.home.post);
  router.get('/', controller.home.get);
  router.get('/user/:id', controller.user.info);
  router.post('/user/:id', controller.user.deal);
};
