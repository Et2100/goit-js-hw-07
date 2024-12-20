// Zadanie 2

// Napisz skrypt tworzący galerię obrazów na podstawie tablicy danych. HTML zawiera listę ul.gallery.

// <ul class="gallery"></ul>



// Wykorzystaj tablicę obiektów images do utworzenia elementów <img>, umieszczonych wewnątrz <li>.



// Możesz utworzyć i dodać elementy HTML za pomocą document.createElement() i elem.append(), lub szablonów ciągów i elem.insertAdjacentHTML().



// Wszystkie elementy galerii powinny być dodawane do DOM w jednej operacji dodawania.
// Dodaj minimalne stylizowanie galerii za pomocą flexboxów za pomocą klas CSS.


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const markup = images.map((image) => {
    return `
    <li class="gallery-item">
        <img src="${image.url}" alt="${image.alt}" class="gallery-image">
    </li>`
}).join("");
gallery.insertAdjacentHTML("beforeend", markup)

// Na co zwróci uwagę mentor podczas sprawdzania:

// Stworzona i dodana do DOM galeria z trzema obrazami.
// Galeria dodana do listy ul.gallery i składa się z 6 elementów <li>, w których znajdują się elementy <img>.
// Do tworzenia elementów <img> użyto danych z tablicy obiektów images.
// Wszystkie elementy galerii dodane do DOM w jednej operacji dodawania.
// Istnieje minimalne stylizowanie galerii przy użyciu flexboxów za pomocą klas CSS.
