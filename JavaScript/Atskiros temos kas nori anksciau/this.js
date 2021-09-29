'use strict';
// 'this' raktažodis nusako, kokioje aplinkoje yra vykdomas kodas
// console.dir(this);
// Kuriant prototipus, objektai įgauna savo aplinką(scope), iš kurios vėliau galima iškvieti funkcijas

// Funkcija spausdinta 'students' kintamajį, aplinkoje kurioje buvo iškviesta
let printStudents = function() {
  console.log(this);
  console.log(this.students);
}
// Pririšamas obejktas, kuris funkcijos iškvietimo metu bus 'this'
// printStudents = printStudents.bind(window); 
// printStudents = printStudents.bind({
//   students: [7, 8]
// }); 

// Sukuriame prototipus, kurie turi savybę students
class Faculty {
  constructor(students) {
    this.students = students;
    this.printStudents = printStudents;
  }
}

class University {
  constructor(students) {
    this.students = students;
    this.printStudents = printStudents;
  }
}

// 'window' aplinkoje sukurtas 'students' kintamasis
window.students = ['Serbentautas', 'Komadauskas', 'Agregatas'];
const ktu = new University(['Jovalas', 'Dagnė', 'Jaukalas']);
const su = new University(['Bemvas', 'Audinė']);
const apzeldinimoFak = new Faculty(['Pinavija', 'Dagilis']);

// window.printStudents
printStudents.call(ktu); // naudojant funkcijos metodą call, pasakome kas KVIETINIO metu, bus this
ktu.printStudents();
su.printStudents();
apzeldinimoFak.printStudents();

// 'this' funkcijos viduje yra aplinka(objektas) kurį naudojant buvo iškviečiama funkcija
// 'this' - tai funkcijos iškietėjas

// Norint funkcijai pririšti objektą, kuris bus pasiekiamas raktažodžiu 'this', galime naudoti 
// funkcijos metodą 'bind(objektasKurisBusThis)'.
// Žr. 12 eil.;

