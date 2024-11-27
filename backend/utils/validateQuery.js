const validateQuery = (req, res, next) => {
  const { limit, sortDirection } = req.query;

  if (limit && isNaN(limit)) {
    return res.status(400).json({ error: "Limit must be a number" });
  }

  if (sortDirection && !["asc", "desc"].includes(sortDirection)) {
    return res.status(400).json({ error: "Invalid sortDirection value" });
  }

  next();
};

module.exports = validateQuery;
