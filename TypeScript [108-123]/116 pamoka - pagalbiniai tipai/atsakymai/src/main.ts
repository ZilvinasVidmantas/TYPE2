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
  description?: string,
  price: number,
  categories: Category[],
  inStock: number,
  mainImg: Image,
  images: Image[],
}

console.group('1. Sukurkite funkciją, kuri atnaujina Image src savybę');
{
  const solution = (image: Image, src: string): Image => ({ ...image, src });

  const img: Image = {
    id: '65465465',
    src: 'https://unsplash.it/200/200'
  };
  const src: string = 'https://unsplash.it/400/400';

  const newImg: Image = solution(img, src);

  console.log('Prieš', img);
  console.log({ src });
  console.log('Po', newImg);
}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri atnaujina visas Category savybes išskyrus id');
{
  type CategoryProps = Omit<Category, 'id'>;

  const solution = (category: Category, categoryProps: CategoryProps): void => {
    Object.assign(category, categoryProps);
  }

  const cat1: Category = {
    id: '1',
    title: 'Vyrams',
    parentCategory: null,
  }

  const cat11: Category = {
    id: '1-1',
    title: 'Batai',
    parentCategory: null,
  }

  const cat12: Category = {
    id: '1-2',
    title: 'category X',
    parentCategory: null,
  }

  const cat111: Category = {
    id: '1-1-1',
    title: 'category Y',
    parentCategory: null,
  }

  const categories: Category[] = [cat1, cat11, cat12, cat111];

  console.table(JSON.parse(JSON.stringify(categories)));

  solution(cat11, { title: 'Avalynė', parentCategory: cat1 });
  solution(cat12, { title: 'Kelnės', parentCategory: cat1 });
  solution(cat111, { title: 'Sportbačiai', parentCategory: cat11 });

  console.table(categories);
}
console.groupEnd();

console.group('3. Sukurkite funkciją, kuri atnaujina perduotas Category savybes išskyrus id');
{

  type CategoryProps = Partial<Omit<Category, 'id'>>;

  const solution = (category: Category, categoryProps: CategoryProps): void => {
    Object.assign(category, categoryProps);
  }

  const cat1: Category = {
    id: '1',
    title: 'Vyrams',
    parentCategory: null,
  }

  const cat11: Category = {
    id: '1-1',
    title: 'Avalynė',
    parentCategory: cat1,
  }

  const cat12: Category = {
    id: '1-2',
    title: 'Category X',
    parentCategory: cat1,
  }

  const cat111: Category = {
    id: '1-1-1',
    title: 'Sportbačiai',
    parentCategory: null,
  }

  const categories: Category[] = [cat1, cat11, cat12, cat111];

  console.table(JSON.parse(JSON.stringify(categories)));

  solution(cat11, {});
  solution(cat12, { title: 'Kelnės' });
  solution(cat111, { parentCategory: cat11 });

  console.table(categories);
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

console.group('6. Sukurkite funkciją, kuri pašalina Item savybes "description" ir "images"');
{

}
console.groupEnd();

console.group('7. Pakeiskite Category tipą, jog "title" savybės tipas būtų atskirai DIDŽIOSIOMIS RAIDĖMIS aprašyta string`ų sajunga CategoryTypes. Pakeitus tipą, atnaujinkite praeitas užduotis');
{

}
console.groupEnd();
