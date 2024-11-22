const jwt = require('jsonwebtoken');
const checkToken = (req, res, next) => {
  try {
    console.log('middleware worked ');
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(404).json({ message: 'you are not authorized' });
    }
    const token = bearerToken.split(' ')[1];
    const check = jwt.verify(token, process.env.SECRET_KEY);
    console.log(check);
    next();
  } catch (error) {
    res.status(404).json({ messgae: 'you are not authorized' });
  }
};
module.exports = checkToken;
