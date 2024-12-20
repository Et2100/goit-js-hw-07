// Zadanie 1.

// HTML zawiera listę kategorii ul#categories.

//     <ul id="categories">
//         <li class="item">
//           <h2>Animals</h2>
//           <ul>
//             <li>Cat</li>
//             <li>Hamster</li>
//             <li>Horse</li>
//             <li>Parrot</li>
//           </ul>
//         </li>
//         <li class="item">
//           <h2>Products</h2>
//           <ul>
//             <li>Bread</li>
//             <li>Parsley</li>
//             <li>Cheese</li>
//           </ul>
//         </li>
//         <li class="item">
//           <h2>Technologies</h2>
//           <ul>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>JavaScript</li>
//             <li>React</li>
//             <li>Node.js</li>
//           </ul>
//         </li>
//       </ul>

const list = document.querySelector('#categories');

const categories = list.querySelectorAll(".item")
console.log(`Num of categories: ${categories.length}`)

categories.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("ul li").length;
    console.log(categoryTitle);
    console.log(itemsCount);
})


// Z wykorzystaniem właściwości i metod elementów DOM napisz skrypt, który:

// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementów li.item.
// Dla każdego elementu li.item na liście ul#categories znajdzie i wypisze w konsoli tekst nagłówka elementu (tagu <h2>) oraz liczbę elementów w kategorii (wszystkich <li>, które są w nim zagnieżdżone).


// Na co zwróci uwagę mentor podczas sprawdzania:

// Liczba kategorii, ich nazwa i liczba elementów uzyskane za pomocą właściwości i metod elementów DOM.
// Dane dla każdej kategorii zostały uzyskane i wypisane w konsoli w ciele pętli lub metody forEach().
// W konsoli powinien być wyświetlony następujący komunikat:




