const Joi = require("joi");

const leadBody = Joi.object({
  name: Joi.string().min(2).max(80).required(),
  email: Joi.string().email().max(120).required(),
  phone: Joi.string().max(30).allow("").default(""),
  company: Joi.string().max(120).allow("").default(""),
  message: Joi.string().min(1).max(2000).required(),
});

const textBody = Joi.object({
  text: Joi.string().min(1).max(2000).required(),
});

const createMessage = Joi.object({
  body: Joi.alternatives().try(leadBody, textBody).required(),
  query: Joi.object().default({}),
  params: Joi.object().default({}),
});

const listMessages = Joi.object({
  body: Joi.object().default({}),
  query: Joi.object({
    limit: Joi.number().integer().min(1).max(200).default(50),
    before: Joi.date().iso().optional(),
    trash: Joi.boolean().truthy("true").falsy("false").optional(),
  }).default({}),
  params: Joi.object().default({}),
});

const deleteMessage = Joi.object({
  body: Joi.object().default({}),
  query: Joi.object().default({}),
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }).required(),
});

const purgeMessage = Joi.object({
  body: Joi.object().default({}),
  query: Joi.object().default({}),
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }).required(),
});

module.exports = {
  createMessage,
  listMessages,
  deleteMessage,
  purgeMessage,
};
