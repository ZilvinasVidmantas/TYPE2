import fs from 'fs';
const fakeToken = 'iadhgoisghiohsdghfgh54+sf6gh6dhn54dgh';
const { users } = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

const findUserByEmailAndPassword = (email, password) => {
  const user = users.find(x => x.email === email);
  if (user) {
    if (user.password === password) {
      return user;
    }
  }
  return null;
}

export const login = (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmailAndPassword(email, password);
  if (user) {
    // Sugeneruoti token'ą naudojant vartotojo duomenis
    const token = fakeToken;
    res.status(200).json({
      status: 200,
      message: 'Pavyko prisijungti',
      token,
      email: user.email,
      role: user.role
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "Nerastas vartotojas"
    });
  }
};

export const register = (req, res) => {
  res.status(400).send('Vartotojas nėra sukurtas');
};

export default {
  login, register
};