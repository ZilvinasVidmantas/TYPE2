/*
      Extra užduotis teorijos metu
        Šitai užduočiai skiriame laiko iki pertraukos
          Po pertraukos paprašysiu vieno iš jūsų parodyti užduotį ir papasakoti kaip sekėsi ją atlikti, su kokiais sunkumais susidūrei ir kaip juos įveikei.
        Iki pertraukos reikia atlikti tik 1) ir 2) užduotis.

Užduotis:
  Sukurti DVD parduotuvės parduodamų filmų diskų/kasečių klasę. Kurioje būtų įvairi informaciją apie filmą ir pačią prekę.

1) Susikurti klasę Filmas, kuri turėtų savybes ir konstruktoriaus pagalba jas priskirtų.
  Savybės:
    pavadinimas (string),
    leidimoMetai (number),
    trukme (number(minutėmis)),
    rezisierius (string),
    ivertinimasIMDB (number),
    aktoriai (masyvas su string(bent 5 aktoriai)),
    tipas (masyvas su string(iki 5 tipų (horror/fantasy/action/thriller...))),
    pakuote (string ("diskas" arba "kasetė")),
    kainaPirkti (number),
    kainaNuomotisParai (number)

2) Sukurti masyvą, kuriame būtų bent 5 filmai sukurti naudojantis Filmas klase.

----- žemiau pateiktas užduotis atlikti kada/jeigu norite/sugebate. -----

3) Sukurkite funkciją, kuri iš 2'o masyvo grąžintų filmus...
3.1) kuriuose vaidina nurodytas aktorius (gautiFilmusPagalAktoriu(string))
3.2) kurių išleidimo data yra senesnė negu nurodyta (gautiFilmusIsleistusSeniauNei(number))
3.3) kurių kainaPirkti yra mažesnė negu nuomos kaina nurodytui dienų skaičiui (gautiFilmusKuriuNevertaNomuotis(number))
3.4) kurių pakuotė atitinka nurodytą tipą(gautiFilmusPagalTipa(string))
3.5) .....galima prisigalvoti extra.....

4) Iš 3.x užduotyje atrinktų filmų suskaičiuoti ir į konsolę atspausdinti...
4.1) 3.1 filmų kiekį.
4.2) 3.2 filmų išleidimo datų vidurkį.
4.3) 3.3 filmų pakuočių tipų kiekį (kiek filmų kasetėse ir kiek filmų diskuose).
4.4) 3.4 filmų dažniausiai pasikartojantis režisierius.
4.5) .....galima prisigalvoti extra.....
*/

class Filmas{
  constructor(pav, lm, trukme, rez, IMDB, akt, tipas, pak, kainaP, kainaN){
    this.pav = pav; // pavadinimas
    this.lm = lm; // leidimo metai
    this.trukme = trukme; // filmo trukmė minutėmis
    this.rez = rez; // režisierius
    this.imdb = IMDB; // IMDB įvertinimas
    this.akt = akt; // aktoriai (masyvas)
    this.tipas = tipas; // tipas (masyvas (siaubo, veiksmo, animacinis...))
    this.pak = pak; // pakuotė (diskas arba kasetė)
    this.kainaP = kainaP; // kaina pirkti
    this.kainaN = kainaN; // kaina nomuotis parai
  }
}

const films = [
  new Filmas("IronMan", 2008, 126, "Jon Favreau", 7.9, ["Robert Downey Jr.","Terrence Howard","Jeff Bridges","Gwynth Paltrow","Leslie Bibb"], ["Action","Adventure","Sci-Fi"], "diskas", 12.5, 2),
  new Filmas("Thor", 2011, 115, "Kenneth Branagh", 7, ["Chris Hemsworth","Natalie Portman","Tom Hiddleston","Anthony Hopkins","Stellan Skarsgard"], ["Action","Adventure","Fantasy"], "diskas", 15, 1.8),
  new Filmas("The League of Extraordinary Gentlemen", 2003, 110, "Stephen Norrington", 5.8, ["Sean Connery","Naseeruddin Shah","Peta Wilson","Tony Curran","Stuart Townsend"], ["Action","Adventure","Fantasy"], "kasetė", 16.3, 2.2),
  new Filmas("SpiderMan", 2002, 121, "Sam Raimi", 7.3, ["Tobey Maguire","Willem Dafoe","Kirsten Dunst","James Franco","Cliff Robertson"], ["Action","Adventure","Sci-Fi"], "diskas", 12, 2.5),
  new Filmas("Deadpool", 2016, 108, "Tim Miller", 8, ["Ryan Reynolds","Karan Soni","Ed Skrein","Michael Benyaer","Brianna Hildebrand"], ["Action","Adventure","Comedy"], "diskas", 19.5, 2.1),
  new Filmas("Van Helsing", 2004, 131, "Stephen Sommers", 6.1, ["Hugh Jackman","Kate Beckinsale","Richard Roxburgh","David Wenham","Shuler Hensley"], ["Action","Adventure","Fantasy"], "kasetė", 19.5, 2.1)
]

console.log(films);