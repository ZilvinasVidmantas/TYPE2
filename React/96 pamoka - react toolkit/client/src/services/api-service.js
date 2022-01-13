import axios from 'axios';

const anonymRequester = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async ({ email, password }) => {
  try {
    const { data } = await anonymRequester.post('/auth/login', { email, password });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const register = async () => {

};

export default {
  login,
  register,
};

/*
Naudojant 'axios' biblioteką, sukurti asinchronines funkcijas:
  * įsirašyti axios biblioteką, ir sukurti 'instance'ą užklausoms daryti

  1.
    pavadinimas: login
    užklausos adresas:'http://localhost:5000/auth/login':
    tipas: POST
    duomenys(body): { email, password } - kolkas į'hard-code'inkite

  2.
    pavadinimas: register
    užklausos adresas:'http://localhost:5000/auth/register':
    tipas: POST
    duomenys(body): {
      name,
      surname,
      email,
      password,
      repeatPassword,
      subscribed
    } - kolkas į'hard-code'inkite

  * Šias funkcijas exportuokite atskirai, ir  bendrame objekte su 'export default'

  * Ištestuokite užklausų sekmingus ir nesėkmingus atvejus

  * funkcijoms sukurkite parametrus, ir ištestuokite duomenis perduodant per parametrus

*/
