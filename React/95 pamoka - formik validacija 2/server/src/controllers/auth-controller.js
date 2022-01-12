import fs from 'fs';
import { v4 as createId } from 'uuid';
const fakeToken = 'iadhgoisghiohsdghfgh54+sf6gh6dhn54dgh';
const database = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

//  USER MODEL ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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

const createUser = ({ name, subscribed, surname, email, password, role }) => {
  const userAlreadyExists = database.users.find(x => x.email === email);
  if (userAlreadyExists) {
    throw new Error('Vartotojas su tokiu paštu jau yra');
  }
  const newUser = {
    id: createId(),
    name,
    subscribed,
    surname,
    email,
    password,
    role
  };
  database.users.push(newUser);
  fs.writeFileSync('db.json', JSON.stringify(database));

  return newUser;
}

//  USER MODEL ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

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
      user: user
    });
  } else {
    res.status(400).json({
      status: 400,
      message: 'Nerastas vartotojas'
    });
  }
};

export const register = (req, res) => {
  const { name, surname, email, password, repeatPassword, subscribed } = req.body;
  if ([name, surname, email, password, repeatPassword, subscribed].some(x => x === undefined)) {
    res.status(400).json({
      status: 400,
      message: 'Trūksta duomenų'
    });
    return;
  }
  if (password !== repeatPassword) {
    res.status(422).json({
      status: 422,
      message: 'Nesutampa slaptažodžiai'
    });
    return;
  }

  try {
    const user = createUser({ name, surname, email, password, subscribed, role: 'user' });
    res.status(201).json({
      message: 'Vartotojas sėkmingai sukurtas',
      user
    });
  } catch ({ message }) {
    res.status(422).json({
      status: 422,
      message
    });
  }
};

export default {
  login, register
};
