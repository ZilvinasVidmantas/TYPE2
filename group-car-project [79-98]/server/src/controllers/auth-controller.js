const fs = require('fs');
const fakeToken = 'iadhgoisghiohsdghfgh54+sf6gh6dhn54dgh';
const database = JSON.parse(fs.readFileSync('database.json', 'utf-8'));

const findUserByEmailAndPassword = (email, password) => {
  const user = database.users.find(x => x.email === email);
  if (user) {
    if (user.password === password) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }
  return null;
}
const login = (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmailAndPassword(email, password);
  if (user) {
    // Sugeneruoti token'ą naudojant vartotojo duomenis
    const token = fakeToken;
    res.status(200).json({
      status: 200,
      message: 'Pavyko prisijungti',
      token,
      user: user
    });
  } else {
    res.status(400).json({
      status: 400,
      message: 'Nerastas vartotojas'
    });
  }
};


module.exports = {
  login
};