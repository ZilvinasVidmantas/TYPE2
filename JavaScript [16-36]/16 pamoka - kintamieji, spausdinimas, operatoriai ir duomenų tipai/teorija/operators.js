/**
 * Operatoriai, tai yra specialūs-užrezervuoti simboliai, kurie atlieka operacijas su reikšmėmis
 * Dažniausiai tos reikšmės būna kintamuosiuose
*/

console.group('----  ----  ---- Intro ---- ---- ----');
{
  const a = 8; // number
  const b = 10; // number
  const c = '10'; // string
  //           ↙ sudėties ženklas yra operatorius, o a, b ir c yra vadinami operandais  
  const d = c + a + b; // -> "10"+8+10 -> "108"+10 -> "10810"
  console.log({ a, b, c, d });
}
console.groupEnd();
console.log('----  ----  ----  ----  ----  ----  ----\n');

console.group('----  Dviejų narių operatoriai ----');
{
  const x = 16;
  const y = 4;
  console.log('x:', x, 'y:', y);
  let res = x + y; console.log('x + y:', res); // Sudėtis
  res = x - y; console.log('x - y:', res); // Atimtis
  res = x * y; console.log('x * y:', res); // Daugyba
  res = x / y; console.log('x / y:', res); // Dalyba
  res = x % y; console.log('x % y:', res); // Liekana
  res = x ** y; console.log('x ** y:', res); // Laipsnis
  res = x ** (1 / y); console.log('x ** (1 / y):', res); // Šaknis
}
console.groupEnd();
console.log('----  ----  ----  ----  ----  ----  ----\n');

console.group('----  Vieno nario operatoriai ----');
{
  let c = 5;
  console.log('c =', c);

  console.log('c++', c++); // Įvykdyti komandą, tuomet padidinti vienetu // c = c + 1
  console.log('++c', ++c); // Padidinti vienetu, tuomet įvykdyti komandą // c = c + 1
  console.log('c--', c--); // Įvykdyti komandą, tuomet sumažinti vienetu // c = c - 1
  console.log('--c', --c); // Sumažinti vienetu, tuomet įvykdyti komandą // c = c - 1
  c += 2; console.log('c += 2; c:', c); // Prie esamos c kintamojo vertės pridėti 2 ir priskirti į tą patį kintamajį c; // c = c + 2
  c -= 2; console.log('c -= 2; c:', c); // Iš esamos c vertės atimti 2 ir priskirti į tą patį kintamajį c; // c = c - 2
  c *= 2; console.log('c *= 2; c:', c); // Esamą c vertę padauginti iš 2 ir priskirti į tą patį kintamajį c; // c = c * 2
  c /= 2; console.log('c /= 2; c:', c); // Esamą c vertę padalinti iš dviejų ir priskirti į tą patį kintamajį c; // c = c / 2
  c %= 2; console.log('c %= 2; c:', c); // Suskaičiuoti esamos c vertės liekaną iš 2 ir priskirti į tą patį kintamajį c; // c = c % 2
}
console.groupEnd();
console.log('----  ----  ----  ----  ----  ----  ----\n');

console.group('----  Loginiai operatoriai ----');
{
  const lijoUzvakar = true;
  const lijoVakar = false;
  const uzvakarTemp = '5';
  const vakarTemp = 5;
  const siandienTemp = 3;

  /*console.group('---- Lygybės ir nelygybės');
  {
    console.log({ lijoUzvakar, lijoVakar, uzvakarTemp, vakarTemp, siandienTemp });
    console.log('"5" > 5', uzvakarTemp > vakarTemp); // Daugiau
    console.log('"5" >= 5', uzvakarTemp >= vakarTemp); // Daugiau arba lygu
    console.log('"5" < 5', uzvakarTemp < vakarTemp); // Mažiau
    console.log('"5" <= 5', uzvakarTemp <= vakarTemp); // Mažiau arba lygu

    console.log('"5" == 5', uzvakarTemp == vakarTemp); // Atlaidi lygybė, gali nesutapti duomenų tipas, bet turi sutapt reikšmė
    console.log('"5" === 5', uzvakarTemp === vakarTemp); // Griežta lygybė, privalo sutapti ir duomenų tipas ir reikšmė.
    
    console.log('"5" != 5', uzvakarTemp != vakarTemp); // Apsukta atlaidžios lygybės reikšmė
    console.log('"5" !== 5', uzvakarTemp !== vakarTemp); // Apsukta griežtos lygybės reikšmė

    console.log('false', lijoVakar);
    console.log('!false', !lijoVakar); // Salygos inversija

    console.log('true', lijoUzvakar);
    console.log('!true', !lijoUzvakar); // Salygos inversija
  }
  console.groupEnd();
  console.log('\n');*/

  console.group('---- Lygybės ir nelygybės');
  {
    console.log({ lijoUzvakar, lijoVakar, uzvakarTemp, vakarTemp, siandienTemp });
    console.log('užvakar > vakar', uzvakarTemp > vakarTemp); // Daugiau
    console.log('užvakar >= vakar', uzvakarTemp >= vakarTemp); // Daugiau arba lygu
    console.log('užvakar < vakar', uzvakarTemp < vakarTemp); // Mažiau
    console.log('užvakar <= vakar', uzvakarTemp <= vakarTemp); // Mažiau arba lygu

    console.log('užvakar == vakar', uzvakarTemp == vakarTemp); // Atlaidi lygybė, gali nesutapti duomenų tipas, bet turi sutapt reikšmė
    console.log('užvakar === vakar', uzvakarTemp === vakarTemp); // Griežta lygybė, privalo sutapti ir duomenų tipas ir reikšmė.
    
    console.log('lijoUzvakar', lijoUzvakar);
    console.log('!lijoUzvakar', !lijoUzvakar); // Salygos inversija
  }
  console.groupEnd();
  console.log('\n');

  console.group('---- Sudėtinės salygos');
  {
    console.log('------ And operatorius, loginė sandauga.');
    console.log('true && true:', true && true);
    console.log('true && false:', true && false);
    console.log('false && true:', false && true);
    console.log('false && false:', false && false);
    console.log('------ OR operatorius, loginė sudėtis.');
    console.log('true || true:', true || true);
    console.log('true || false:', true || false);
    console.log('false || true:', false || true);
    console.log('false || false:', false || false);
  }
  console.groupEnd();
}
console.groupEnd();
console.log('----  ----  ----  ----  ----  ----  ----\n');
