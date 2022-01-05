document.addEventListener("DOMContentLoaded", sidenVises);

/*Funktionen går i gang når burgermenuen trykkes på*/
function sidenVises() {
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
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
