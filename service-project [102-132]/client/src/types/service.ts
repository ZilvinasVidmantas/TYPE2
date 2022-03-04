import { Category, City, User } from 'types';

type Service = {
  id: string,
  title: string,
  price: number,
  images: string[],
  category: Category,
  cities: City[],
  description: string,
  creator: User,
  createdAt: string,
  updatedAt: string,
};

export default Service;
