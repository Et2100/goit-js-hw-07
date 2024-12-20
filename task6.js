// Zadanie 6

// Napisz skrypt do tworzenia i czyszczenia kolekcji elementów z następującą funkcjonalnością.



// Istnieje input, do którego użytkownik wprowadza żądaną liczbę elementów. Po naciśnięciu przycisku Create powinna być renderowana (dodawana do DOM) kolekcja z odpowiednią liczbą elementów i czyścić się wartość w inpucie. Po ponownym naciśnięciu przycisku Create powinna być renderowana nowa kolekcja powyżej starej. Po naciśnięciu przycisku Destroy kolekcja elementów powinna być wyczyszczona.


// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Po naciśnięciu przez użytkownika przycisku Create, wartość w input musi być zwalidowana i musi mieć wartość w zakresie od 1 do 100 włącznie. Tylko wtedy nowe elementy <div> powinny być dodawane do DOM.
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes")



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Aby renderować elementy na stronie, stwórz funkcję createBoxes(amount), która przyjmuje jeden parametr - liczbę, która przechowuje ilość elementów do zrenderowania. Funkcja powinna tworzyć tyle elementów <div>, ile jest podane w parametrze amount, i dodawać je do DOM jako dzieci dla div#boxes.
const createBoxes = (amount) => {
    boxesContainer.innerHTML = '';
    const elements = [];
    for (let i = 0; i < amount; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.width = `${30 + i * 10}px`;
    createDiv.style.height = `${30 + i * 10}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.margin = '5px';
    elements.push(createDiv);
    }
    boxesContainer.append(...elements)
}


// Rozmiary pierwszego elementu <div> powinny wynosić 30px na 30px.
// Każdy kolejny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła. Użyj gotowej funkcji getRandomHexColor() do uzyskania losowego koloru.





// Aby wyczyścić kolekcję po naciśnięciu przycisku Destroy, stwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, usuwając wszystkie utworzone elementy.


createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);

    if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Proszę wprowadzić liczbę od 1 do 100!');
    return;
}

  createBoxes(amount);
  input.value = '';
});

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
}
destroyBtn.addEventListener('click', destroyBoxes);

// Na co zwróci uwagę mentor podczas sprawdzania:

// Po kliknięciu przycisku Create, jeśli wartość w input znajduje się poza zakresem 1-100, nic się nie dzieje.
// Po kliknięciu przycisku Create, w div#boxes dodawana jest taka liczba różnokolorowych kwadratów, jaką podano w input. Wartość w input jest czyszczona.
// Po ponownym kliknięciu przycisku Create poprzednie kwadraty są całkowicie usuwane, a zamiast nich dodawane są nowe w ilości podanej w input. Wartość w input jest czyszczona.
// Wszystkie kwadraty w div#boxes są różnokolorowe i mają tło w losowym kolorze.
// Pierwszy kwadrat w div#boxes ma wymiary 30px na 30px, a każdy kolejny jest o 10px wyższy i szerszy od poprzedniego.
// Po naciśnięciu przycisku Destroy wszystkie kwadraty z div#boxes powinny być usuwane.