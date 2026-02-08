function validate(schema) {
  return (req, res, next) => {
    const { value, error } = schema.validate(
      {
        body: req.body,
        query: req.query,
        params: req.params,
      },
      {
        abortEarly: false,
        stripUnknown: true,
      }
    );

    if (error) {
      return res.status(400).json({
        message: "Dados invalidos.",
        details: error.details.map((detail) => detail.message),
      });
    }

    req.body = value.body;
    req.query = value.query;
    req.params = value.params;

    next();
  };
}

module.exports = validate;
