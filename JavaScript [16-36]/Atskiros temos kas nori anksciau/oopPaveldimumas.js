// Paveldimumas tai ryšys tarp klasių, kuomet vaikinė klasė papildo tėvinės klasės apibūdinimą
// Formuojant paveldimumo hierarchiją, būtina laikytis principo:
//  - vaikinė klasė <A> YRA tėvinė klasė <B>
//    - limondas yra gėrimas
//    - darbuotojas yra žmogus
//    - plaktukas yra įrankis
class Medis {
  constructor({aukstis, spindulys}) {
    this.aukstis = aukstis;
    this.spindulys = spindulys
  }
}

class Lapuotis extends Medis {
  constructor({lapuForma, medzioSavybes}) {
    super(medzioSavybes);
    this.lapuForma = lapuForma
  }
}

class Berzas extends Lapuotis {
  constructor(demiuSkaicius, lapuocioNustatymai ) {
    super(lapuocioNustatymai);
    this.demiuSkaicius = demiuSkaicius;
  }
}

const berzas1 = new Berzas(7, {
  lapuForma: 'grazi',
  medzioSavybes: {
    aukstis: 2,
    spindulys: 7 
  }
})

console.table(berzas1);


