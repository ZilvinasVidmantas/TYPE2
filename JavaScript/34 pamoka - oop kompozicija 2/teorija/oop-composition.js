/*
  Objektiškai orientuoto programavimo (OOP) savybė kompozicija (angl.: composition) yra skirta kurti ryšius tarp skirtingų klasių objektų.
  Jeigu turime kompleksines klases, kurios yra susijusios su kitomis kompleksinėmis klasėmis, jos gali būti susijusios vienu ir 3 būdų.
    1:1 (one-to-one):
      Tai toks ryšys, kuomet klasės A objektas turi sasają TIK SU VIENU klasės (B) objektu,
      o klasės B objektas turi TIK VIENĄ sasają su klasės A objektu.
      Pvz.:
        -------------------
           one-to-one
        -------------------
        class A | class B 
        -------------------
        Kirvis  | Kotas
        Žiedas  | Kamienas
        Šuo     | Uodega
        Mašina  | Variklis
        Žmogus  | Širdis
        -------------------
    1:N (one-to-many):
      Tai toks ryšys tarp klasių objektų, kuomet klasės A objektas gali turėti DAUGIAU NEI VIENĄ B klasės objektą, 
      o klasės B objektai gali priklausyti TIK VIENAM klasės A objektui. 
      B klasės objektai negali priklausyti skirtingiems A klasės objektams vienu metu.
      Pvz.:
        --------------------------
                one-to-many
        --------------------------
        class A     | class B 
        --------------------------
        Automobilis | Ratas
        Kompiuteris | Procesorius
        Savininkas  | Automobilis 
        Stalas      | Stalo koja
        Mobilusis   | Sim kortelė
        Gymdytoja   | Vaikas
        --------------------------
    M:N (many-to-many):
      tai toks ryšys tarp klasių objektų, kuomet klasės A objektas gali turėti DAUGIAU NEI VIENĄ B klasės objektą,
      o B klasės objektas gali priklausyti DAUGIAU NEI VIENAM A klasės objektui.
      Pvz.:
        ----------------------
            many-to-many
        ----------------------
        class A   | class B 
        ----------------------
        Brolis    | Sesė
        Studentas | Modulis
        Žmogus    | Darbas 
        Klientas  | Paslauga
        Katė      | Guolis 
        ----------------------
*/

console.groupCollapsed('1:1 - one-to-one');
{
  class Kirvis {
    #užmautasKotas = null;

    constructor(svoris, medžiaga) {
      this.svoris = svoris;
      this.medžiaga = medžiaga;
    }

    get užmautasKotas() {
      return this.#užmautasKotas;
    }

    get header() {
      return `${this.medžiaga}, ${this.svoris}kg`;
    }

    get info() {
      let result = 'Kirvis: ' + this.header + '\n\tKotas: ';
      if (this.#užmautasKotas) {
        result += this.#užmautasKotas.header;
      } else {
        result += '---';
      }
      return result + '\n';
    }

    užmautiKotą = kotas => {
      if (!(kotas instanceof Kotas))
        throw new TypeError(`metodo 'užmautiKotą' 1 argumentas privalo būti 'Kotas' klasės objektas.`);
      if (this.#užmautasKotas === null) {
        if (kotas.užmautasKirvis === null) {
          this.#užmautasKotas = kotas;
          kotas.užmautiKirvį(this);
        } else if (kotas.užmautasKirvis === this) {
          this.#užmautasKotas = kotas;
        } else {
          console.error(`Kotas '${kotas.header}' jau turi kitą kirvį '${kotas.užmautasKirvis.header}'!`);
        }
      } else {
        console.error(`Kirvis '${this.header}' jau turi kotą '${this.#užmautasKotas.header}'!`);
      }
    }
  }

  class Kotas {
    #užmautasKirvis = null;

    constructor(ilgis, diametras, medienosTipas) {
      this.ilgis = ilgis;
      this.diametras = diametras;
      this.medienosTipas = medienosTipas;
    }

    get užmautasKirvis() {
      return this.#užmautasKirvis;
    }

    get header() {
      return `${this.medienosTipas}, ⇿${this.ilgis}m, ⌀${this.diametras}m`;
    }

    get info() {
      let result = 'Kotas: ' + this.header + '\n\tKirvis: ';
      if (this.#užmautasKirvis) {
        result += this.#užmautasKirvis.header;
      } else {
        result += '---';
      }
      return result + '\n';
    }

    užmautiKirvį = (kirvis) => {
      if (!(kirvis instanceof Kirvis)) throw new TypeError(`metodo 'užmautiKirvį' 1 argumentas privalo būti 'Kirvis' klasės objektas.`);
      // Jeigu ŠIS KOTAS neturi kirvio
      if (this.#užmautasKirvis === null) {
        switch (kirvis.užmautasKotas) {
          // kirvis neturi koto
          case null:
            this.#užmautasKirvis = kirvis;
            kirvis.užmautiKotą(this);
            break;
          // kirviui jau yra užmautas ŠIS KOTAS
          case this:
            this.#užmautasKirvis = kirvis;
            break;
          // default atveju gaunasi, jog kirvio kotas NĖRA ŠIS KOTAS ir NĖRA TUŠČIAS. Reiškia, jis turi kitą kotą.
          default:
            console.error(`Kirvis '${kirvis.header}' jau turi kitą kotą '${kirvis.užmautasKotas.header}'!`);
        }
        // ŠIS KOTAS jau turi kirvį
      } else {
        console.error(`Kotas '${this.header}' jau turi kirvį '${this.#užmautasKirvis.header}'!`);
      }
    }
  }

  const kirvis1 = new Kirvis(2, 'FeC-982');
  const kirvis2 = new Kirvis(2.1, 'FeC-980');
  const kotas1 = new Kotas(0.5, 0.2, 'Ąžuolas');
  const kotas2 = new Kotas(0.6, 0.15, 'Uosis');

  kirvis1.užmautiKotą(kotas1);
  kirvis2.užmautiKotą(kotas1);

  console.log(kirvis1.info);
  console.log(kirvis2.info);
  console.log(kotas1.info);
  console.log(kotas2.info);
}
console.groupEnd();

console.group('1:N - one-to-many');
{
  class Mobilusis {
    #simKortelės = [];

    constructor(gamintojas, modelis) {
      this.gamintojas = gamintojas;
      this.modelis = modelis;
    }

    get simKoretelės() {
      return [...this.#simKortelės];
    }

    get header() {
      return `${this.gamintojas} ${this.modelis}`;
    }

    get info() {
      let result = this.header + '\n\tKortelės: ';
      if (this.#simKortelės.length === 0) {
        result += '---';
      } else {
        result += this.#simKortelės.reduce((str, simKoretelė) => str + '\n\t\t' + simKoretelė.header, '');
      }
      return result + '\n';
    }

    arKortelėJauYraĮdėta = simKortelė => {
      if (!(simKortelė instanceof SimKoretelė))
        throw new TypeError(`metodo 'arKortelėJauYraĮdėta' 1 argumentas privalo būti 'SimKoretelė' klasės objektas.`);

      return Boolean(this.#simKortelės.find(mobiliajamEsantiKortelė => mobiliajamEsantiKortelė === simKortelė))
    }

    įdėtiKoretelę = simKortelė => {
      if (!(simKortelė instanceof SimKoretelė))
        throw new TypeError(`metodo 'įdėtiKoretelę' 1 argumentas privalo būti 'SimKoretelė' klasės objektas.`);

      const kortelėJauYraMobiliajam = this.arKortelėJauYraĮdėta(simKortelė);
      if (kortelėJauYraMobiliajam) {
        console.error(`kortelė '${simKortelė.header}' jau yra šiame mobiliajam: '${this.header}'`);
      } else {
        if (simKortelė.priskirtasMobilusis === null) {
          this.#simKortelės.push(simKortelė);
          simKortelė.priskirtiMobiliajam(this);
        } else if (simKortelė.priskirtasMobilusis === this) {
          this.#simKortelės.push(simKortelė);
        } else {
          console.error(`kortelė '${simKortelė.header}' jau yra priskirta mobiliajam: '${simKortelė.priskirtasMobilusis.header}'`);
        }
      }
    }
  }

  class SimKoretelė {
    #priskirtasMobilusis = null;

    constructor(ryšys, numeris) {
      this.ryšys = ryšys;
      this.numeris = numeris;
    }

    get priskirtasMobilusis() {
      return this.#priskirtasMobilusis;
    }

    get header() {
      return `${this.ryšys} ${this.numeris}`;
    }

    get info() {
      let result = this.header + '\n\tMobilusis įrenginys: ';
      if (this.#priskirtasMobilusis === null) {
        result += '---'
      } else {
        result += this.#priskirtasMobilusis.header;
      }
      return result + '\n';
    }

    priskirtiMobiliajam = mobilusis => {
      if (!(mobilusis instanceof Mobilusis))
        throw new TypeError(`metodo 'priskirtiMobiliajam' 1 argumentas privalo būti 'Mobilusis' klasės objektas.`);

      if (this.#priskirtasMobilusis === null) {
        this.#priskirtasMobilusis = mobilusis;
        const kortelėJauYraMobiliajam = mobilusis.arKortelėJauYraĮdėta(this);
        if (!kortelėJauYraMobiliajam) {
          mobilusis.įdėtiKoretelę(this);
        }
      } else {
        console.error(`kortelė '${this.header}' jau yra priskirta mobiliajam: '${this.#priskirtasMobilusis.header}'`);
      }
    }
  }
  const samsung = new Mobilusis('Samsung', 'Galaxy S10');
  const iPhone = new Mobilusis('IPhone', '13 Pro');

  const omnitelCard = new SimKoretelė('Omnitel', '+370 687 11111');
  const tele2Card = new SimKoretelė('Tele2', '+370 658 22222');
  const biteCard = new SimKoretelė('Bitė', '+370 687 33333');
  const teledemaCard = new SimKoretelė('Teledema', '+370 687 44444');
  const labasCard = new SimKoretelė('Labas', '+370 687 55555');

  // ↓↓↓ Susiejimai ↓↓↓
  {
    /*                     Įmanomi scenarijai
      GERAI:
      mobilusKurisNeturiŠiosKortelės.įdėtiKoretelę(laisvaKoretelė)
      laisvaKoretelė.priskirtiMobiliam(mobilusKurisNeturiŠiosKortelės)

      BLOGAI:
      mobilusKurisJauTuriŠiąKortelė.įdėtiKoretelę(koretelėKuriJauYraŠiamMobiliajam)
      koretelėKuriJauYraŠiamMobiliajam.priskirtiMobiliam(mobilusKurisJauTuriŠiąKortelė)

      BLOGAI:
      kitasMobilus.įdėtiKortelę(koretelėKuriPriklausoKitamMobiliajam)
      koretelėKuriPriklausoKitamMobiliajam.priskirtiMobiliam(kitasMobilus)
    */

    // GERAI: mobilusKurisNeturiŠiosKortelės.įdėtiKoretelę(laisvaKoretelė)
    samsung.įdėtiKoretelę(omnitelCard);
    // GERAI: laisvaKoretelė.priskirtiMobiliam(mobilusKurisNeturiŠiosKortelės)
    tele2Card.priskirtiMobiliajam(samsung);
    // GERAI: mobilusKurisNeturiŠiosKortelės.įdėtiKoretelę(laisvaKoretelė)
    iPhone.įdėtiKoretelę(biteCard);

    // BLOGAI: mobilusKurisJauTuriŠiąKortelė.įdėtiKoretelę(koretelėKuriJauYraŠiamMobiliajam)
    omnitelCard.priskirtiMobiliajam(samsung);
    // BLOGAI: koretelėKuriJauYraŠiamMobiliajam.priskirtiMobiliam(mobilusKurisJauTuriŠiąKortelė)
    biteCard.priskirtiMobiliajam(iPhone);
    
    // BLOGAI: kitasMobilus.įdėtiKortelę(koretelėKuriPriklausoKitamMobiliajam)
    iPhone.įdėtiKoretelę(omnitelCard);
    // BLOGAI: koretelėKuriPriklausoKitamMobiliajam.priskirtiMobiliam(kitasMobilus)
    biteCard.priskirtiMobiliajam(samsung);
  }
  // ↑↑↑ Susiejimai ↑↑↑

  console.group('Mobilieji');
  {
    console.log(samsung.info);
    console.log(iPhone.info);
  }
  console.groupEnd();
  console.group('Kortelės');
  {
    console.log(omnitelCard.info);
    console.log(tele2Card.info);
    console.log(biteCard.info);
    console.log(teledemaCard.info);
    console.log(labasCard.info);
  }
  console.groupEnd();
}
console.groupEnd();