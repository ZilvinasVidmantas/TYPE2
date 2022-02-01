// 1
const nameValue1 = document.querySelector("#username1").value;
const passValue1 = document.querySelector("#password1").value;
console.log(nameValue1);
console.log(passValue1);

// 2
function funcName(event){
  event.preventDefault();
  
  const nameValue2 = document.querySelector("#username2").value;
  const passValue2 = document.querySelector("#password2").value;
  console.log(nameValue2);
  console.log(passValue2);
}

// 3
function changeText(){
  let textToChange = document.querySelector("#textToChange");
  textToChange.innerHTML = "Labas, aš esu pakeistas tekstas.";
}

// 4
function makeTable(){
  const columns = document.querySelector("#columns").value; // 4
  const rows = document.querySelector("#rows").value; // 3
  let html = ``;
  html = "<table>"
  for(let i = 1; i <= rows; i++){ // 3 kartus
    html+= "<tr>";
    for(let j = 1; j <= columns; j++){
      html+=`<td> ${i} ${j} </td>`;
    }
    html+= "</tr>";
  }
  html+="</table>";
  console.log(html);
  document.querySelector("#table").innerHTML = html;
}

/*  st 4
    eil 3
    table
      ciklas 3 
        tr
          ciklas 4
            td /td
        /tr
    /table
*/

// 5
function remove(){
  const selectorius = document.querySelector("#colorSelect");
  selectorius.remove(selectorius.selectedIndex);
}

// 6
function area(){
  let x = document.querySelector("#rectX").value;
  let y = document.querySelector("#rectY").value;
  let z = document.querySelector("#rectZ").value;
  console.log(typeof x);
  x = parseFloat(x); // parseFloat(x)
  console.log(typeof x);
  console.log(x);
}

function perimeter(){

}

function surfaceArea(){

}

function volume(){

}