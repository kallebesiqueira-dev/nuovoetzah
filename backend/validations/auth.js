const Joi = require("joi");

const register = Joi.object({
  body: Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).max(128).required(),
  }).required(),
  query: Joi.object().default({}),
  params: Joi.object().default({}),
});

const login = Joi.object({
  body: Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).max(128).required(),
  }).required(),
  query: Joi.object().default({}),
  params: Joi.object().default({}),
});

const refresh = Joi.object({
  body: Joi.object({
    refreshToken: Joi.string().optional(),
  }).default({}),
  query: Joi.object().default({}),
  params: Joi.object().default({}),
});

const logout = Joi.object({
  body: Joi.object({
    refreshToken: Joi.string().optional(),
  }).default({}),
  query: Joi.object().default({}),
  params: Joi.object().default({}),
});

module.exports = {
  register,
  login,
  refresh,
  logout,
};
