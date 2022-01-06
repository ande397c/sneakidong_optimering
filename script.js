document.addEventListener("DOMContentLoaded", sidenVises);

// Funktioner til header:

/*Funktionen går i gang når burgermenuen trykkes på*/
function sidenVises() {
  // Variabler pop up

  const span = document.querySelector(".close");

  span.addEventListener("click", fjern);

  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  antalCounter();
}

/*Funktionen fjerner eller tilføjer classen hidden som gemmer den og ændre ikon*/
function toggleMenu() {
  document.querySelector(".menu").classList.toggle("hidden");
  document.querySelector("#menuknap").classList.toggle("kryds");
}

// Dropdown

function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// ................ Script til produkt .......................

let tæller = 1;
let produktNavn = "SneakerSafe Sålbeskyttere";

let overskriftPopUp = document.querySelector("#popup_overskrift");

let produktNavnContainer = document.querySelector("#produkt_navn_cart");

let cartNR = document.querySelector(".update_cart");

let stkTotal = document.querySelector("#antal_stk");

let samlet = document.querySelector("#total");

let levering = document.querySelector("#levering_pris");

// Variabler til produkt
let pris = 199;

let prisTotal = document.querySelector("#pris_total");

let samletPris = levering + pris * tæller;

let fragt = 29;

let udenFragt = 0;

function antalCounter() {
  // Læg i kurv knap der viser pop up

  document.querySelector("#cart_button").addEventListener("click", show);

  // Variabler til counter

  let add = document.querySelector("#up");
  let remove = document.querySelector("#ned");
  let nr = document.querySelector("#number");

  // Tæller antal gøres mindre

  remove.addEventListener("click", () => {
    if (tæller > 1) {
      tæller -= 1;
      nr.innerText = tæller;
      cartNR.innerText = tæller;
      stkTotal.innerText = `${tæller} stk.`;
      checkPrice();
    }
  });

  // Tæller antal øges

  add.addEventListener("click", () => {
    tæller += 1;
    nr.innerText = tæller;
    cartNR.innerText = tæller;
    stkTotal.innerText = `${tæller} stk.`;
    checkPrice();
  });
}

function show() {
  let besked = document.querySelector("#text");

  document.querySelector(".pop_up").classList.toggle("block");

  // Eksempel fra AKA projekt. Få navn på produkt med syntaks:
  // ur.Navn. Samme syntaks der bruges til at udskrive produktnavnet i DOM'en.
  besked.innerText = `Du har lagt ${tæller} stk. i kurven`;

  overskriftPopUp.innerText = `${produktNavn} er tilføjet kurven`;
}

// Funktionen til lukning af pop up

function fjern() {
  document.querySelector(".pop_up").classList.toggle("block");
}

produktNavnContainer.innerText = `${produktNavn}`;

function checkPrice() {
  prisTotal.innerText = pris * tæller + " kr.";

  let value = pris * tæller;

  if (value >= 300) {
    levering.innerText = "0 kr.";
    samlet.innerText = value + udenFragt + "kr.";
  } else {
    levering.innerText = "29 kr.";
    samlet.innerText = value + fragt + "kr.";
  }
}
