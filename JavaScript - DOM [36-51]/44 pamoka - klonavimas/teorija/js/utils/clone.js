// Tarpinis variantas, dar nebaigts. Reikia įvertinti prototipų kopijavimą
const clone = (original) => {
  if (typeof original !== 'object') return original;

  // Reikėtų įgalinti Prototipo priskyrimą, jeigu toks yra
  const copy = original instanceof Array ? [] : {};
  for (const key in original) {
    copy[key] = clone(original[key])
  }
  return copy;
}
