console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  function byPrice(a, b) {
    return a.price - b.price;
  }
  const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
  ];

  drinks.sort(byPrice);
  console.log(drinks);

}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, propName, propValue) {
    obj[propName] = propValue;
    return obj;
  }

  console.log(addName({}, "Brutus", 300)); // ➞ { Brutus: 300 }
  console.log(addName({ piano: 500 }, "Brutus", 400)); // ➞ { piano: 500, Brutus: 400 }
  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // ➞ { piano: 500, stereo: 300, Caligula: 440 }
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

  // function generation(level, sex) {
  //   switch (level) {
  //     case -3: return sex === 'f' ? 'great grandmother' : 'great grandfather';
  //     case -2: return sex === 'f' ? 'grandmother' : 'grandfather';
  //     case -1: return sex === 'f' ? 'mother' : 'father';
  //     case 0: return sex === 'f' ? 'me!' : 'me!';
  //     case 1: return sex === 'f' ? 'daughter' : 'son';
  //     case 2: return sex === 'f' ? 'granddaughter' : 'grandson';
  //     case 3: return sex === 'f' ? 'great granddaughter' : 'great grandson';
  //   }
  // }

  function createGeneration() {
    const titles = {
      '-3': { f: 'great grandmother', m: 'great grandfather' },
      '-2': { f: 'grandmother', m: 'grandfather' },
      '-1': { f: 'mother', m: 'father' },
      '0': { f: 'me!', m: 'me!' },
      '1': { f: 'daughter', m: 'son' },
      '2': { f: 'granddaughter', m: 'grandson' },
      '3': { f: 'great granddaughter', m: 'great grandson' }
    };
    return function (level, sex) {
      return titles[level][sex];
    }
  }

  const generation = createGeneration();

  console.log(generation(2, "f"));
  console.log(generation(-3, "m"));
  console.log(generation(1, "f"));

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tileHand) {
    let sum = 0;
    for (let i = 0; i < tileHand.length; i++) {
      const tileObject = tileHand[i];
      const score = tileObject.score;
      sum += score;
    }
    return sum;
  }

  function maximumScore(tileHand) {
    let sum = 0;
    for (let i = 0; i < tileHand.length; i++) {
      sum += tileHand[i].score;
    }
    return sum;
  }

  function maximumScore(tileHand) {
    let sum = 0;
    function addToSum(tile) {
      sum += tile.score
    }
    tileHand.forEach(addToSum)
    return sum;
  }

  function maximumScore(tileHand) {
    let sum = 0;
    tileHand.forEach(tile => sum += tile.score)
    return sum;
  }

  function maximumScore(tileHand) {
    return tileHand.reduce((acc, { score }) => acc += score, 0);
  }
  // const maximumScore = tileHand => tileHand.reduce((acc, { score }) => acc += score, 0);

  console.log({
    '28': maximumScore([
      { tile: "N", score: 1 },
      { tile: "K", score: 5 },
      { tile: "Z", score: 10 },
      { tile: "X", score: 8 },
      { tile: "D", score: 2 },
      { tile: "A", score: 1 },
      { tile: "E", score: 1 }
    ]),
    '15': maximumScore([
      { tile: "B", score: 2 },
      { tile: "V", score: 4 },
      { tile: "F", score: 4 },
      { tile: "U", score: 1 },
      { tile: "D", score: 2 },
      { tile: "O", score: 1 },
      { tile: "U", score: 1 }
    ])
  })
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
    let sum = 0;
    for (const key in obj) {
      sum += obj[key];
    }
    return sum - limit;
  }

  function calculateDifference(obj, limit) {
    return Object.values(obj).reduce((p, n) => p + n) - limit;
  }

  console.log({
    '15': calculateDifference({ "baseball bat": 20 }, 5),
    '11': calculateDifference({ skate: 10, painting: 20 }, 19),
    '1': calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400),
  })

}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    const result = [];
    for (const key in obj) {
      const propertyArray = [key, obj[key]];
      result.push(propertyArray)
    }
    return result;
  }
  function toArray(obj) {
    function changePropNameToKeyValueArrayPair(propName) {
      return [propName, obj[propName]];
    }

    return Object.keys(obj).map(changePropNameToKeyValueArrayPair);
    return Object.keys(obj).map(name => [name, obj[name]]);
  }

  function toArray(obj) {
    return Object.entries(obj);
  }

  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(toArray({}));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    let min = Number.MAX_VALUE;
    for (const color in inks) {
      if (inks[color] < min) {
        min = inks[color];
      }
    }
    return min;
  }
  function inkLevels(inks) {
    inks = Object.values(inks);
    let min = inks[0];
    for (let i = 0; i < inks.length; i++) {
      if (inks[i] < min) {
        min = inks[i];
      }
    }
    return min;
  }

  function inkLevels(inks) {
    function selectMin(currentMin, value) {
      return Math.min(currentMin, value);
    }
    return Object.values(inks).reduce(selectMin);
    return Object.values(inks).reduce((min, num) => Math.min(min, num));
  }

  function inkLevels(inks) {
    return Math.min(...Object.values(inks));
  }

  console.log({
    '10': inkLevels({
      "cyan": 23,
      "magenta": 12,
      "yellow": 10
    }),

    '432': inkLevels({
      "cyan": 432,
      "magenta": 543,
      "yellow": 777
    }),

    '0': inkLevels({
      "cyan": 700,
      "magenta": 700,
      "yellow": 0
    }),
  });

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  function calculateLosses(obj) {
    // 1. Suskaičių <obj> savybių reikšmių sumą
    let sum = 0;
    for (const key in obj) {
      sum += obj[key]
    }
    // 2. Grąžinimas
    if (sum === 0) {
      //    2.1 Jeigu objektas tuščias -> grąžinti string "Lucky you!"
      return "Lucky you!"
    } else {
      //    2.2 Jeigu suma > 0 -> grąžinti tą sumą, pvz.: 120
      return sum;
    }
  }
  function calculateLosses(stolenItems) {
    let moneyLoss = 0;
    for (const itemName in stolenItems) {
      moneyLoss += stolenItems[itemName];
    }
    return moneyLoss === 0 ? "Lucky you!" : moneyLoss;
  }

  function calculateLosses(obj) {
    const sum = Object.values(obj).reduce((a, v) => a + v);
    return sum === 0 ? "Lucky you!" : sum;
  }

  function calculateLosses(obj) {
    return Object.keys(obj).length === 0
      ? "Lucky you!"
      : Object.values(obj).reduce((a, v) => a + v)
  }

  function calculateLosses(obj) {
    return Object.values(obj).reduce((a, v) => a + v) || "Lucky you!";
  }
  console.log({
    '100': calculateLosses({
      tv: 30,
      skate: 20,
      stereo: 50,
    }),
    '20000': calculateLosses({
      painting: 20000,
    }),
    'Lucky you!': calculateLosses({})
  });
}
console.groupEnd();
