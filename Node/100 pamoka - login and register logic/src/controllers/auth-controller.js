const UserModel = require('../models/user-model');

const register = async (req, res) => {
  const { email, name, surname } = req.body;
  try {
    const userDoc = await UserModel.create({
      email,
      name,
      surname
    });

    res.status(200).json({
      message: 'Registracija pavyko',
      user: userDoc,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }

};

module.exports = {
  register,
};