
const authController = require("./controllers/authController");

module.exports = {
  register: authController.register,
  login: authController.login,
  refresh: authController.refresh,
  logout: authController.logout,
  me: authController.me,
};
