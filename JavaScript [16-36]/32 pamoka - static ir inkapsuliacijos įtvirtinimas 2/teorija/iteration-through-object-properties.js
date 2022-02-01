const obj = {
  x: 1,
  y: [1, 2, 3],
  z: -7,
}

for (const propertyName in obj) {
  if (obj[propertyName] instanceof Array) {
    console.group(propertyName);
    {
      obj[propertyName].forEach((x, i) => console.log(`${propertyName}[${i}] => ${x}`));
    }
    console.groupEnd()
  } else {
    console.log(propertyName, obj[propertyName]);
  }
}
