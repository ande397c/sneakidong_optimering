window.addEventListener("DOMContentLoaded", sidenVises);

// Definerer information om produkt på produktet

let pris = 50;

let produktNavn = "Snørrebånd";

// ................ Script til header .......................

// Funktionen kaldes når indholdet på siden er loaded

function sidenVises() {
  document.querySelector(".pris_single").innerText = pris + " kr.";

  document.querySelector("#single_navn").innerText = produktNavn;

  // Variabler pop up

  document.querySelector("#menuknap").addEventListener("click", toggleMenu);

  // Kalder funktionen der styrer de dynamiske udregninger
  antalCounter();
}

/*Funktionen fjerner eller tilføjer classen hidden som gemmer den og ændre ikon*/
function toggleMenu() {
  document.querySelector(".menu").classList.toggle("hidden");
  document.querySelector("#menuknap").classList.toggle("kryds");
}

// Funktion til dropdown

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

// Generelle varibabler - counter og tilfældigt genereret tal

let tæller = 1;

let OrderNumber = Math.floor(Math.random() * 1000000 + 1);

// Generelle varibabler - pop ups

let cartNR = document.querySelector(".update_cart");

let popUpHeader = document.querySelector(".cart_indhold");

// Generelle varibabler - antal stk., total, subtotal, omkostninger

let stkTotal = document.querySelector("#antal_stk");

let samlet = document.querySelector("#total");

let samletMain = document.querySelector("#total_main");

let levering = document.querySelector("#levering_pris");

let leveringMain = document.querySelector("#levering_pris_main");

let prisTotal = document.querySelector("#pris_total");

// Header popup og antal ved kurv-ikon fjernes

popUpHeader.style.display = "none";
cartNR.style.display = "none";

// Variabler til produkt (singleview) counter

let add = document.querySelector("#up");
let remove = document.querySelector("#ned");
let nr = document.querySelector("#number");

// Variabler til counter  Main Cart

let counterOutput = document.querySelector("#output");
let counterIncre = document.querySelector("#incre");
let CounterDecre = document.querySelector("#decre");

// Funktion der opdatere prisværiderne

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
  } else {
    levering.innerText = "29 kr.";
    samlet.innerText = value + fragt + " kr.";

    leveringMain.innerText = "29 kr.";

    samletMain.innerText = value + fragt + " kr.";
  }
}

// Funktion der gør det muligt for brugeren at opdatere antal stk. (produkt (singleview) )

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

  document.querySelector("#produkt_navn_cart").innerText = `${produktNavn}`;

  prisTotal.innerText = pris;

  if (popUpHeader.style.display === "none" || cartNR.style.display === "none") {
    popUpHeader.style.display = "block";
    document.querySelector("#cart_button").disabled = true;
    document.querySelector("#cart_button").style.cursor = "default";
    cartNR.style.display = "block";
    setTimeout(hide, 3000);
  } else {
    document.querySelector("#cart_button").disabled = false;
    document.querySelector("#cart_button").style.cursor = "pointer";
    popUpHeader.style.display = "none";
    cartNR.style.display = "none";
  }
  console.log("headerCart");

  // Ved klik på kurv-ikonet i headeren kan brugeren
  // Se kurven

  document
    .querySelector("#menu_cart")
    .addEventListener("click", cartIconHeader);

  checkPrice();
}

// Gemmer pop up efter 2 sekunder

function hide() {
  console.log("hide");
  popUpHeader.style.display = "none";
}

function cartIconHeader() {
  console.log("cartIconHeaderCart");

  if (popUpHeader.style.display === "none") {
    popUpHeader.style.display = "block";
  } else {
    popUpHeader.style.display = "none";
  }
}

// Funktion der viser brugerens hovedeCart
function showMainCart() {
  console.log("showMainCart");

  document.querySelector("#produkt_navn_maincart").innerText = `${produktNavn}`;

  document.querySelector("#produkt_pris_maincart").innerText = pris + " kr.";

  popUpHeader.style.display = "none";

  document.querySelector("#empty_maincart").style.display = "none";

  document.querySelector(".main_cart").classList.toggle("block");

  document.querySelector(".shop_main").addEventListener("click", ReturnShop);

  document
    .querySelector(".checkout_main")
    .addEventListener("click", purchaseConfirmation);

  // Ved klik på kryds fjernes produkterne fra kurven, indholdet justeres, til
  // kasse-knap kan ikke klikkes

  document.querySelector(".close_maincart").addEventListener("click", () => {
    console.log("clearMainCart");

    // Viser 'tom kurv' besked

    document.querySelector("#empty_maincart").style.display = "block";

    // Fjerner produktinformationerne fra kurven

    document.querySelector("#main_cart_img").style.display = "none";
    document.querySelector("#produkt_navn_maincart").style.display = "none";
    document.querySelector(".counter_ui").style.display = "none";
    document.querySelector("#produkt_pris_maincart").style.display = "none";

    // Ændrer værdier til 0 kr.

    document.querySelector("#subtotal_main").innerText = 0 + " kr.";
    leveringMain.innerText = 0 + " kr.";
    samletMain.innerText = 0 + " kr.";

    // Tilpasser indholdet efter elementerne er blevet fjernet
    document.querySelector(".cart_section").style.marginBottom = "5.5rem";

    // Gør det umuligt for brugeren at gå til kassen hvis kurven er tømt

    document.querySelector(".checkout_main").disabled = true;
    document.querySelector(".checkout_main").style.cursor = "default";

    // nulstiller antal stk.
    cartNR.style.display = "none";

    tæller = 1;

    nr.innerText = tæller;

    document.querySelector(".shop_main").addEventListener("click", () => {
      location.reload();
    });
  });

  // Kalder counter funktioner til at opdatere tal

  checkPrice();
  mainCartCounter();
}

// Funktion der gør det muligt for brugeren at opdatere antal stk. (mainCart)
function mainCartCounter() {
  console.log("mainCartCounter");

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

  document
    .querySelector("#menu_cart")
    .removeEventListener("click", cartIconHeader);
}

// Returnerer brugeren til shoppen med produktantal fra kurven
function ReturnShop() {
  document.querySelector(".main_cart").classList.toggle("block");

  document.querySelector("#cart_button").disabled = false;
  document.querySelector("#cart_button").style.cursor = "pointer";

  // Tilføjer produktinformationerne til kurven igen

  document.querySelector("#main_cart_img").style.display = "block";
  document.querySelector("#produkt_navn_maincart").style.display = "block";
  document.querySelector(".counter_ui").style.display = "block";
  document.querySelector("#produkt_pris_maincart").style.display = "block";

  // Justerer indholdet i kurven
  document.querySelector(".cart_section").style.marginBottom = "0rem";

  // Justerer antal stk.
  cartNR.innerText = tæller;
  nr.innerText = tæller;
  stkTotal.innerText = tæller + " stk.";

  document
    .querySelector("#menu_cart")
    .addEventListener("click", cartIconHeader);
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

  cartNR.style.display = "none";

  document
    .querySelector("#menu_cart")
    .removeEventListener("click", cartIconHeader);

  document.querySelector("#shop").addEventListener("click", removeConfirmation);
}

// Funktionen til lukning af købsbekræftelse

function removeConfirmation() {
  console.log("removeConfirmation");

  // Luk confirmation (popup) ved at genindlæse siden
  location.reload();
}
