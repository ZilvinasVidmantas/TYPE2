# Grupinis projektas komandomis

## Tikslas
Sukurti puslapį apie visą mūsų praeitą medžiagą (1-8 paskaitos) grupelėse (4-5 žmonės).

## Priemonės:
* Repozitorijos paslaugas teikianti organizacija
  * https://github.com

* Užduočių planuoklė (galite rinktis ir kitą)
  * https://kanbanflow.com/
  * https://support.microsoft.com/en-us/office/use-planner-in-microsoft-teams-62798a9f-e8f7-4722-a700-27dd28a06ee0

* GIT terminalas:
  * https://git-scm.com/downloads

* Projekto šablono repozitorija:
  * https://github.com/ZilvinasVidmantas/TYPE2_HTML-CSS-PROJECT-TEMPLATE
  * arba galite naudotis šiame aplanke esančiame "group-project-template"

* Kodo redaktorius:
  * https://code.visualstudio.com/

## Projekto vystymo eiga:
* Išsirinkti komandos kuratorių
  * Kuratoriaus pareigos:
      * Sukurti repozitoriją (arba pa'fork'int TYPE2_HTML-CSS-PROJECT-TEMPLATE repozitoriją)
      * Pakviesti visus narius, prisijungti prie vystomo projekto repozitorijos.
      * Kuruoti užduočių tvarkyklės darbus. Gerai apibūdinto task'o savybės:
        * Pavadinimas sufleruojantis atliekamus darbus.
        * Aiškiai aprašytas darbo apraše.
        * Kuo mažiau susijęs su kitais darbais.
        * Turintis prioriteto nustatymą.
      * Organizuoti susitikimus.
      * Kuruoti susitarimą, kaip bus patvirtinami 'Pull Request'ai ir įgalinti tai Github'e.
      * Pilnai išmokti projekto vystymo metodologiją kuriant naujas šakas ir apjungiant su pagrindine šaka. Kuruoti savo kolegas šiame procese.
  * Kuratoriaus privilegijos: 
    * statusas
    * kantrybės ugdymas
* Sudaryti pradinį task'ų sąrašą naudojant savo pasirinktą užduočių planuoklę.
* Sukurti repozitorijoje suvaržymus 'Pull Request'ams.
* Užtikrinti, jog visi kolegos yra parsisiuntę pradinę projekto versiją.
* Vystyti darbą atliekant task'us atskirose šakose ir jas apjungiant į pagrindinę šaką.
* Papildyti/pakeisti README.md failą, jog matytūsi šio projekto dalininkai.
  * README.md sintaksė - https://guides.github.com/features/mastering-markdown/ 

## Vieno darbo(task) vystymo eiga. 
### TOBULU ATVEJU, KUOMET NIEKS NEPAKEITĖ "master" ŠAKOS:
0. Prisiskirti sau task'ą užduočių planuoklėje, pakeisti jo būseną "In progress"
1. git pull → tai daryti "master" šakoje. Šia komanda parsisiunčiate naujausią versiją.
2. git checkout -b "task-branch-name" → Persijungiate į savo šaką, kurioje atliksite darbus.
  * ... atliekate darbą, rašote kodą ...
3. git add . → užfiksuojate pakitimus
4. git commit -m "darbą apibūdinantis paaiškinimas" → užtvirtinate pakitimus
5. git push --set-upstream origin "task-branch-name" → jūsų šaka su pakitimais paviešinama globalioje repozitorijoje
6. https://github.com susirasti repozitoriją ir joje padaryti pull Request
  * Pull request pavadinime turi būti task'o Pavadinimas
  * turi būti jungiama jūsų šaka į pagrindinę
7. Užduočių tvarkyklėje perkelti task'ą į Pull Request skiltį ir į komentarus įdėti nuorodą į Pull Request
8. Laukti 2 patvirtinimų, ir sulaukus sujungti šakas
  base:master ← "task-branch-name"

### PROFESIONALUS-REKOMENDUOJAMAS BŪDAS, pateika iliustracijoje "./darbo atlikimo GIT schema.png"
0. Prisiskirti sau task'ą užduočių planuoklėje, pakeisti jo būseną "In progress"
1. git pull → tai daryti "master" šakoje. Šia komanda parsisiunčiate naujausią versiją
2. git checkout -b "task-branch-name" → Persijungiate į savo šaką, kurioje atliksite darbus.
  * ... atliekate darbą, rašote kodą ...
3. git add . → užfiksuojate pakitimus
4. git commit -m "darbą apibūdinantis paaiškinimas" → užtvirtinate pakitimus
5. git checkout master →  grįžtate į pagrindinę šaką, į tą nuo kurios atsiskyrėte.
6. git pull → pasisiunčiate potencialiai pakitusią "master" versiją
7. git checkout "task-branch-name" → grįžtate į savo šaką
8. git merge master → prie savo šakos "task-branch-name" prijungiate naują "master" versiją
  * ... išsprendžiate konfliktus, jei jų buvo ir pa'commit'ate
9. git push --set-upstream origin "task-branch-name" → jūsų šaka su pakitimais paviešinama globalioje repozitorijoje
10. https://github.com susirasti repozitoriją ir joje padaryti pull Request
  * Pull request pavadinime turi būti task'o Pavadinimas
  * turi būti jungiama jūsų šaka į pagrindinę
11. Užduočių tvarkyklėje perkelti task'ą į Pull Request skiltį ir į komentarus įdėti nuorodą į Pull Request
12. Laukti 2 patvirtinimų, ir sulaukus sujungti šakas
       base:master ← "task-branch-name"
  
## Bendri patarimai:
* Iškilus sunkumams organizuoti savo grupės susitikimą ir išsiaiškinti iškilusias problemas, jei nepavyksta kreiptis į dėstytoją.
* Darbus atlikti tik tuos, kurie yra suorganizuoti darbų planuoklėje.
* Pagarba ir kantrybė atsiperka ilgalaikėje perspektyvoje.

