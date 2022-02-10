type Category = {
  id: string;
  title: string;
  parentCategory: Category | null;
}

type Image = {
  id: string;
  src: string;
}

type Item = {
  id: string,
  title: string,
  description: string,
  price: number,
  categories: Category[],
  inStock: number,
  mainImg: Image,
  images: Image[],
}

console.group('1. Sukurkite funkciją, kuri atnaujina Image src savybę');
{

}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri atnaujina visas Category savybes išskyrus id');
{

}
console.groupEnd();

console.group('3. Sukurkite funkciją, kuri atnaujina perduotas Category savybes išskyrus id');
{

}
console.groupEnd();

console.group('4. Sukurkite funkciją, kuri atnaujina visas Item savybes išskyrus id');
{

}
console.groupEnd();

console.group('5. Sukurkite funkciją, kuri atnaujina perduotas Item savybes išskyrus id');
{

}
console.groupEnd();

