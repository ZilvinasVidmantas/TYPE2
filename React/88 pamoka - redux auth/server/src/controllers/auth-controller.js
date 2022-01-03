export const login = (req, res) => {
  res.status(400).send('Nepavyko prisijungti');
};

export const register = (req, res) => {
  res.status(400).send('Vartotojas nėra sukurtas');
};

export default {
  login, register
};