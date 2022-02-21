interface User {
  id: string,
  email: string,
  name: string,
  surname: string,
  role: 'ADMIN' | 'USER',
}

export default User;
