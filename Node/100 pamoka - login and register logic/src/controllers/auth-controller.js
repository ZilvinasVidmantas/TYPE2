const UserModel = require('../models/user-model');
const { hashPasswordAsync } = require('../helpers/hash');

const register = async (req, res) => {
  const { email, password, repeatPassword, name, surname } = req.body;
  try {
    if( password !== repeatPassword) throw new Error('Passwords do not match');
    const userDoc = await UserModel.create({
      email,
      password,
      name,
      surname,
    });

    res.status(200).json({
      message: 'Registracija pavyko',
      user: userDoc,
    });

    const hashedPassword = await hashPasswordAsync(password);
    await UserModel.findByIdAndUpdate(userDoc.id, {
      password: hashedPassword,
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
