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
    pakuote (string ("diskas"/"kasetė")),
    kainaPirkti (number),
    kainaNuomotisParai (number)

2) Sukurti masyvą, kuriame būtų bent 5 filmai sukurti naudojantis Filmas klase.

----- žemiau pateiktas užduotis atlikti kada/jeigu norite/sugebate. -----

3) Filmas klasėje sukurti metodą, kuris grąžintų filmus...
3.1) kuriuose vaidina nurodytas aktorius (gautiFilmusPagalAktoriu(string))
3.2) kurių išleidimo data yra senesnė negu nurodyta (gautiFilmusIsleistusSeniauNei(number))
3.3) kurių kainaPirkti yra mažesnė negu nuomos kaina nurodytui dienų skaičiui (gautiFilmusKuriuNevertaNomuotis(number))
3.4) kurių tipas atitinka nurodytą tipą(gautiFilmusPagalTipa(string))
3.5) .....galima prisigalvoti extra.....

4) Iš 3.x užduotyje atrinktų filmų suskaičiuoti ir į konsolę atspausdinti...
4.1) 3.1 filmų kiekį.
4.2) 3.2 filmų išleidimo datų vidurkį.
4.3) 3.3 filmų pakuočių tipų kiekį (kiek filmų kasetėse ir kiek filmų diskuose).
4.4) 3.4 filmų dažniausiai pasikartojantis režisierius.
4.5) .....galima prisigalvoti extra.....
*/