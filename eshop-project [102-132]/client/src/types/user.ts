import Image from './image';

type User = {
  id: string,
  email: string,
  role: 'USER' | 'ADMIN',
  name: string,
  mainImg?: Image,
  surname: string,
  createdAt: string,
  updatedAt: string,
};

export default User;
