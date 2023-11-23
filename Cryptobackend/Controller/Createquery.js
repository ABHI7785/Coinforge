const query = require("./Queryschema");

const createque = async (req, res) => {
  const { name, email, message } = req.body;

  const createquee = await query.create({ name, email, message });

  res.json(createquee);
};
module.exports = createque;
