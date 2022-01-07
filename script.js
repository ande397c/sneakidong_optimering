document.addEventListener("DOMContentLoaded", sidenVises);

let pris = 250;

// Funktioner til header:

/*Funktionen går i gang når burgermenuen trykkes på*/

function sidenVises() {
  document.querySelector(".pris_single").innerText = pris + " kr.";

  // Variabler pop up

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

// Generelle varibabler - counter og produktnavn

let tæller = 1;

let produktNavn = "SneakerSafe Sålbeskyttere";

// Generate order number

let OrderNumber = Math.floor(Math.random() * 1000000 + 1);

console.log(OrderNumber);

// Generelle varibabler - containere til produkt og omkostningsinformation

let produktNavnContainer = document.querySelector("#produkt_navn_cart");

let cartNR = document.querySelector(".update_cart");

let stkTotal = document.querySelector("#antal_stk");

let samlet = document.querySelector("#total");

let samletMain = document.querySelector("#total_main");

let levering = document.querySelector("#levering_pris");

let leveringMain = document.querySelector("#levering_pris_main");

let prisTotal = document.querySelector("#pris_total");

let popUpHeader = document.querySelector(".cart_indhold");

popUpHeader.style.display = "none";

cartNR.style.display = "none";

// Variabler til counter / produktside

let add = document.querySelector("#up");
let remove = document.querySelector("#ned");
let nr = document.querySelector("#number");

// Variabler til counter  Main Cart

let counterOutput = document.querySelector("#output");
let counterIncre = document.querySelector("#incre");
let CounterDecre = document.querySelector("#decre");

CounterDecre.addEventListener("click", () => {
  if (tæller > 1) {
    tæller -= 1;
    counterOutput.innerText = tæller;

    cartNR.innerText = tæller;
    nr.innerText = tæller;
    stkTotal.innerText = `${tæller} stk.`;
  }
  checkPrice();
});

// Tæller antal øges produktside

counterIncre.addEventListener("click", () => {
  tæller += 1;
  counterOutput.innerText = tæller;

  cartNR.innerText = tæller;
  nr.innerText = tæller;
  stkTotal.innerText = `${tæller} stk.`;
  checkPrice();
});

// Variabler til pris og omkostninger:

document.querySelector("#produkt_pris_maincart").innerText = pris + " kr.";

function checkPrice() {
  console.log("checkPrice");

  let value = pris * tæller;

  document.querySelector("#subtotal_main").innerText = value + " kr.";

  let fragt = 29;
  let udenFragt = 0;

  prisTotal.innerText = value + " kr.";

  counterOutput.innerText = tæller;

  if (value >= 300) {
    levering.innerText = "0 kr.";
    samlet.innerText = value + udenFragt + " kr.";

    leveringMain.innerText = "0 kr.";
    samletMain.innerText = value + udenFragt + " kr.";

    console.log("udenFragt");
  } else {
    levering.innerText = "29 kr.";
    samlet.innerText = value + fragt + " kr.";

    leveringMain.innerText = "29 kr.";

    samletMain.innerText = value + fragt + " kr.";
  }
}

function antalCounter() {
  // Læg i kurv knap der viser header pop up

  document
    .querySelector("#cart_button")
    .addEventListener("click", showHeaderCart);

  // Tæller antal gøres mindre produktside

  remove.addEventListener("click", () => {
    if (tæller > 1) {
      tæller -= 1;
      nr.innerText = tæller;

      cartNR.innerText = tæller;
      stkTotal.innerText = `${tæller} stk.`;
      checkPrice();
    }
  });

  // Tæller antal øges produktside

  add.addEventListener("click", () => {
    tæller += 1;
    nr.innerText = tæller;

    cartNR.innerText = tæller;
    stkTotal.innerText = `${tæller} stk.`;
    checkPrice();
  });
}

// Funktion der viser første pop up. Her skrives variabler ud, såsom tæller
// og produktNavn

function showHeaderCart() {
  document.querySelector(".popup_btn").addEventListener("click", showMainCart);

  produktNavnContainer.innerText = `${produktNavn}`;

  prisTotal.innerText = pris;

  if (popUpHeader.style.display === "none" || cartNR.style.display === "none") {
    popUpHeader.style.display = "block";
    cartNR.style.display = "block";
  } else {
    popUpHeader.style.display = "none";
    cartNR.style.display = "none";
  }
  console.log("headerCart");

  checkPrice();
}

// Funktion der viser brugerens hovedeCart
function showMainCart() {
  console.log("showMainCart");

  document.querySelector("#produkt_navn_maincart").innerText = `${produktNavn}`;

  popUpHeader.style.display = "none";

  document.querySelector(".main_cart").classList.toggle("block");

  document.querySelector(".shop_main").addEventListener("click", ReturnShop);

  document
    .querySelector(".checkout_main")
    .addEventListener("click", purchaseConfirmation);

  checkPrice();
}

function ReturnShop() {
  document.querySelector(".main_cart").classList.toggle("block");
}

// Funktion der viser købskekræftelse
function purchaseConfirmation() {
  console.log("show confirmation");

  // Skjul mainCart
  document.querySelector(".main_cart").classList.toggle("block");

  // Vis confirmation (popup)
  document.querySelector(".pop_up").classList.toggle("block");

  document.querySelector("#order_number_output").innerText = ` ${OrderNumber}`;

  let overskriftPopUp = document.querySelector("#popup_overskrift");

  overskriftPopUp.innerText = `Tak for dit køb af ${tæller} stk. ${produktNavn}`;

  let besked = document.querySelector("#text");

  besked.innerText = `Du modtager snart en mail med yderligere oplysninger om dit køb `;

  document.querySelector("#shop").addEventListener("click", removeConfirmation);
}

// Funktionen til lukning af købsbekræftelse

function removeConfirmation() {
  console.log("removeConfirmation");

  // Luk confirmation (popup) ved at genindlæse siden
  location.reload();
}

// Script til header pop up, hvor informationer ændrer sig
// dynamisk. (Mangler en funktion)!
