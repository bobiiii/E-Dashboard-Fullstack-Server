const userLogin = (req, res) => {
  console.log(req.body);
  res.send({ message: 'API Hit' });
};

module.exports = {
  userLogin,
};
