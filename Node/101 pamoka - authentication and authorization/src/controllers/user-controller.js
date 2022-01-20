/*
  task: fetch users from database
  įgalinkite visų User modelio dokumentų parsiuntimą
  getUsers requestHandler'io metu.
*/

const getUsers = async (req, res) => {
  res.status(200).json({
    users: []
  });
}

module.exports = {
  getUsers
}