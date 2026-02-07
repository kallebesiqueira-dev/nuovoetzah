const router = require('express').Router();
const auth = require('../middlewares/auth');

let messages = [];

router.post('/messaggi', (req, res) => {
  messages.push(req.body);
  res.status(201).end();
});

router.get('/messaggi', auth, (req, res) => {
  res.json(messages);
});

module.exports = router;
