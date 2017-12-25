let routes = require('express').Router();

routes.get('/liste', (req, res) => {
  res.send('liste')
})

module.exports = routes;