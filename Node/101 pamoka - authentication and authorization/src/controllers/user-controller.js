const getUsers = async (req, res) => {
  res.status(200).json({
    users: []
  });
}

module.exports = {
  getUsers
}