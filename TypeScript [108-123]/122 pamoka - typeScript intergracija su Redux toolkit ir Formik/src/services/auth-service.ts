import User from '../types/user';

type Crudentials = {
  email: string,
  password: string,
};

interface DbUser extends User {
  password: string,
}

const dbUsers: DbUser[] = [
  {
    id: '1',
    email: 'admin@gmail.com',
    password: 'Vilnius123',
    name: 'Adminas',
    surname: 'Gediminas',
    role: 'ADMIN',
  },
  {
    id: '2',
    email: 'user@gmail.com',
    password: 'Vilnius123',
    name: 'Jovalas',
    surname: 'Gėda',
    role: 'USER',
  }
];

const mockServerLogin = (curdetials: Crudentials): Promise<User> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser: DbUser | undefined = dbUsers.find(x => x.email === curdetials.email);

      if (!foundUser)
        reject(new Error('Vartotojas su tokiu paštu nerastas'));
      if (foundUser.password !== curdetials.password)
        reject(new Error('Slaptažodžiai nesutampa'));

      const { password, ...user } = foundUser;
      resolve(user);
    }, 1000);
  });

const AuthService = new (class AuthService {

  login = async (curdetials: Crudentials): Promise<User> => {
    try {
      return await mockServerLogin(curdetials);
    }
    catch (err) {
      console.log(err.message ? err.message : err);
    }
  };

})();

export default AuthService;
