import fs from 'fs';
const { users } = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

const findUserByEmailAndPassword = (email, password) => {
  const user = user.find(x => x.email === email);
  if(user){
    if(user.password === password){
      return user;
    }
  }
  return null;
}

export const login = (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmailAndPassword(email, password);
  /*
    Patikrinkti kintamajį user, jei user'is rastas, siųsti user'io duomenis, priešųingu atveju, siųsti nesėkmingo prisijungimo duomenis
  */
  if (true) {
    // sėkimgas prisijungimas
    res.status(200).json({
      status: 200,
      message: 'Pavyko prisijungti',
      token: 'iadhgoisghiohsdghfgh54+sf6gh6dhn54dgh',
      email: 'admin@gmail.com',
      role: 'admin'
    });
  } else {
    // nesėkmingas prisijungimas
    res.status(400).json({
      status: 400,
      message: "Neteisingi prisijungimo duomenys"
    });
  }
};

export const register = (req, res) => {
  res.status(400).send('Vartotojas nėra sukurtas');
};

export default {
  login, register
};