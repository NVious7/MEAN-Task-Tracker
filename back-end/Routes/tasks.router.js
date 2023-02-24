const router = require('express').Router();
const { list, create, destroy, update } = require('./tasks.controller');

router
  .route('/:id')
  .put(update)
  .delete(destroy)

router
  .route('/')
  .get(list)
  .post(create)

module.exports = router;