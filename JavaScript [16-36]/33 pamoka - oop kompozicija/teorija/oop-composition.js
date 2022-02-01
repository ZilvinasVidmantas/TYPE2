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

console.group('1:1 - one-to-one');
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
      if (kotas instanceof Kotas && !this.#užmautasKotas) {
        this.#užmautasKotas = kotas;
        if (kotas.užmautasKirvis !== this) {
          kotas.užmautiKirvį(this);
        }
      } else {
        console.log(this, 'jau turi kotą');
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
      if (kirvis instanceof Kirvis && !this.#užmautasKirvis) {
        this.#užmautasKirvis = kirvis;
        if (kirvis.užmautasKotas !== this) {
          kirvis.užmautiKotą(this);
        }
      } else {
        console.log(this, 'jau turi kirvį');
      }
    }
  }

  const kirvis1 = new Kirvis(2, 'FeC-982');
  const kirvis2 = new Kirvis(2.1, 'FeC-980');
  const kotas1 = new Kotas(0.5, 0.2, 'Ąžuolas');
  const kotas2 = new Kotas(0.6, 0.15, 'Uosis');

  kirvis1.užmautiKotą(kotas1);
  //  Bėda: Užmaunant ant kirvis2 -> kotas1.
  //    Kirviui-2 yra užmaunas kotas1, nors kotas1 jau yra užmautas ant kirvis1.
  //    Nors kotas1, savo kirvio ir nepakeičia, kirvis2 užsimauna kotą-1
  //    Ką daryti?
  kirvis2.užmautiKotą(kotas1);

  console.log(kirvis1.info);
  console.log(kirvis2.info);
  console.log(kotas1.info);
  console.log(kotas2.info);
}
console.groupEnd();
