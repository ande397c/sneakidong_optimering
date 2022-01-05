document.addEventListener("DOMContentLoaded", sidenVises);

// Funktioner til header:

/*Funktionen går i gang når burgermenuen trykkes på*/
function sidenVises() {
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

function antalCounter() {
  // Variabler til counter

  let add = document.querySelector("#up");
  let remove = document.querySelector("#ned");
  let nr = document.querySelector("#number");
  let tæller = 1;

  // Tæller antal gøres mindre

  remove.addEventListener("click", () => {
    if (tæller > 1) {
      tæller -= 1;
      nr.innerText = tæller;
    }
  });

  // Tæller antal øges

  add.addEventListener("click", () => {
    tæller += 1;
    nr.innerText = tæller;
  });
}

// Variabler til produkt
let pris = 200;
