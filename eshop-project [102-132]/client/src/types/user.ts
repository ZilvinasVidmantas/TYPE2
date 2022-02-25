import Image from './image';

type User = {
  id: string,
  email: string,
  role: string,
  name: string,
  mainImg?: Image,
  surname: string,
  createdAt: string,
  updatedAt: string,
};

export default User;
