const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const token = jwt.sign(
    { admin: true },
    process.env.JWT_SECRET
  );
  res.json({ token });
});

module.exports = router;
