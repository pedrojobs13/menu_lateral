// // ClassList

// let elements = document.querySelector("body");

// elements.classList.add("active", "green"); // adicionar uma ou mais classes ao elemento

// console.log(elements.classList);
// elements.classList.remove("active"); // remover class

// elements.classList.toggle("active"); // se estiver ativo eu não coloco, caso contrário eu coloco

let menu = document.querySelector("aside");
let elements = document.querySelectorAll("li");
let vet = document.querySelector(".disable_menu");
let perfil = document.querySelector(".none_img");
function openMenu() {
  menu.classList.toggle("active");
  vet.classList.toggle("disable_menu");
  perfil.classList.toggle("none_img");
  for (let i = 0; i < elements.length + 1; i++) {
    elements.classList.toggle("active");
  }
}
