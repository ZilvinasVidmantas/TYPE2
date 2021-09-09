Tikslas:
  Sukurti puslapį apie visą mūsų praeitą medžiagą (1-8 paskaitos) grupelėse(4-5 žmonės).


Priemonės:
  Repozitorijos paslaugas teikianti organizacija
    https://github.com

  Darbų planavimo teikianti įmonė (galite rinktis ir kitą)
    https://kanbanflow.com/
    https://support.microsoft.com/en-us/office/use-planner-in-microsoft-teams-62798a9f-e8f7-4722-a700-27dd28a06ee0

  git terminalas:
    https://git-scm.com/downloads

  projekto šablono repozitorija:
    https://github.com/ZilvinasVidmantas/TYPE2_HTML-CSS-PROJECT-TEMPLATE
    arba šiame aplanke esantis "group-project-template"


Projekto vystymo eiga:
  Išsirinkti komandos kuratorių
    Kuratoriaus pareigos:
      Sukurti repozitoriją (arba pa'fork'int TYPE2_HTML-CSS-PROJECT-TEMPLATE repozitoriją)
      Pakviesti visus narius, prisijungti prie vystomo projekto repozitorijos
      Kuruoti darbų paskirstymo procesą. Gerai apibūdinto task'o savybės:
        * Pavadinimas sufleruojantis atliekamus darbus
        * Aiškiai aprašytas darbo apraše
        * Kuo mažiau susijęs su kitais darbais
        * Turintis prioriteto nustatymą
      Organizuoti susitikimus
      Kuruoti susitarimą, kaip bus patvirtinami 'Pull Request'ai ir įgalinti tai Github'e.
      Pilnai išmokti projekto vystymo metodologiją kuriant naujas šakas ir apjungiant su pagrindine, ir kuruoti savo kolegas šiame procese.

    Kuratoriaus privilegijos: 
      statusas
      kantrybės ugdymas

  Sudaryti pradinį task'ų sąrašą

  Sukurti repozitorijoje suvaržymus 'Pull Request'ams.

  Visiems kolegoms parsisiųsti pradinę projekto versiją

  Vystyti darbą atliekant task'us atskirose šakose ir jas apjungiant į pagrindinę šaką


Vieno darbo vystymo eiga, pateika iliustracijoje "./darbo atlikimo GIT schema.png". 
  TOBULU ATVEJU:
    0. Prisiskirti sau task'ą užduočių tavrkyklėje tvarkyklėje, pakeisti jo būseną "In progress"
    1. git pull → tai daryti savo šakoje. Šia komanda parsisiunčiate naujausią versiją
    2. git checkout -b <task-branch> → Persijungiate į savo šaką, kurioje atliksite darbus.
    ... atliekate darbą, rašote kodą ...
    3. git add . → užfiksuojate pakitimus
    4. git commit -m "darbą apibūdinantis paaiškinimas" → užtvirtinate pakitimus
    5. git push --set-upstream origin <task-branch> → jūsų šaka su pakitimais paviešinama globalioje repozitorijoje
    6. https://github.com susirasti repozitoriją ir joje padaryti pull Request
      * Pull request pavadinime turi būti task'o Pavadinimas
      * turi būti jungiama jūsų šaka į pagrindinę
    7. Užduočių tvarkyklėje perkelti task'ą į Pull Request skiltį ir į komentarus įdėti nuorodą į Pull Request
    8. Laukti 2 patvirtinimų, ir sulaukus sujungti šakas
      base:master ← <task-branch>
  

Bendri patarimai:
    * Iškilus sunkumams organizuoti susitikimą ir išsiaiškinti iškilusias problemas, tęsti darbų vystymą
    * Darbus atlikti tik tuos, kurie yra suorganizuoti darbų planuoklėje.
    * Pagarba ir kantrybė atsiperka ilgalaikėje perspektyvoje, trumpalaikėje - nevisada.



    



     


