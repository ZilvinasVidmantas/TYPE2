// Tarpinis variantas, dar nebaigts. Reikia įvertinti prototipų kopijavimą
/**
 * Ši klonavimo funkcija skirta kopijuoti: Object literal, Primitive values, Array
 * Jeigu reikšmė yra funkcija, kuriama nuoroda
 * 
 * @param {any} original 
 * @returns 
 */
const clone = (original) => {
  if (typeof original !== 'object') return original;

  // Reikėtų įgalinti Prototipo priskyrimą, jeigu toks yra
  const copy = original instanceof Array ? [] : {};
  for (const key in original) {
    copy[key] = clone(original[key])
  }
  return copy;
}
