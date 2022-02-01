// Faile 'this.js' nagrinėjome kaip prototipams priskiriant funkcijas pasikeičia
// 'this' reikšmė funkcijos vykdymo metu.

// Su EcmaScript 2015 (ES5) javascript sintaksės atnaujinimu buvo pristatytos lambda išraiškos
// Vienas iš privalumų - trumpesnis užrašymas
// BET! daug svarbesnis skirtumas yra šis:
//      lambda išraiškose 'this' susisieja su aplinka, kurioje buvo DEKLARUOTA
//      standartinė funkcija elgiasi priešingai, ji savo 'this' susieja VYKDYMO METU,
//  funkcijos atveju, 'this' yra objektas per kurį buvo iškvieta funkcija, pvz. :
//        {... kažkoks objektas ...}.kviečiamaFunkcija();
//        manoObjektas.spausdinti()
//               ↑ manoObjektas vykdymo funkcijos metu bus 'this'

window.duomenys = 'window aplinkos duomenys';

// Lambda išraiškos deklaravimas window aplinkoje
const windowAplinkojeDeklaruotaLambda = () => {
  console.log(this);
  console.log(this.duomenys);
}

// Funkcijos deklaravimas window aplinkoje
const windowAplinkojeDeklaruotaFunkcija = function () {
  console.log(this);
  console.log(this.duomenys);
}

class ManoPrototipas {
  constructor(
    prototipoKurimoMetuPerduotiDuomenys,
    prototipoKurimoMetuPerduotasVykdomasisBlokas
  ) {
    this.duomenys = prototipoKurimoMetuPerduotiDuomenys;
    this.prototipoMetodas = prototipoKurimoMetuPerduotasVykdomasisBlokas;
  }
}

const objektasKurtasPagalPrototipa1 = new ManoPrototipas(
  '1 objekto duomenys',
  windowAplinkojeDeklaruotaLambda
);
const objektasKurtasPagalPrototipa2 = new ManoPrototipas(
  '2 objekto duomenys',
  windowAplinkojeDeklaruotaFunkcija
);

objektasKurtasPagalPrototipa1.prototipoMetodas();
objektasKurtasPagalPrototipa2.prototipoMetodas();