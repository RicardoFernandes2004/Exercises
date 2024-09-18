let div = document.getElementById("app");
console.log(div);

let paragrafo = document.getElementById("paragrafo1");
console.log(paragrafo1);


let paises = document.getElementsByClassName("paises");
for (let i = 0;i<3;i++){
    console.log(paises[i]);
}

// let container = document.querySelector("#container");
// console.log(container);

let paragrafon = document.querySelector(".texto");
console.log(paragrafon);

let radioChecked = document.querySelector(".radio:checked");

let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

titulo.innerText = "UMIEOMAMIHENTEPAPERDERELTIEMPO";
console.log(titulo.innerText);

let text = document.querySelector("div"), input = document.querySelector("input");

let container = document.getElementById("container");
container.innerHTML = "<h2>Olá mundo</h2><p>Lorem IPsum DOLOR SIT AMET CONSECTUR</p>";

