// Zadanie 3

// Napisz skrypt, który podczas wprowadzania tekstu do inputu input#name-input (zdarzenie input) podstawia jego bieżącą wartość do span#name-output jako imię do powitania. Upewnij się, że wartość w inpucie jest oczyszczana z białych znaków na krańcach. Jeśli input jest pusty lub zawiera tylko spacje, to zamiast imienia w spanie powinien pojawić się ciąg "Anonymous".

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output")

textInput.addEventListener('input', () => {
    
    const inputValue = textInput.value.trim();
  
   
    output.textContent = inputValue === '' ? 'Anonymous' : inputValue;
  });
// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>



// Na co zwróci uwagę mentor podczas sprawdzania:

// Element input#name-input nasłuchuje zdarzenie input.
// Podczas wprowadzania tekstu do inputu, jego aktualna wartość jest podstawiana do span#name-output jako imię do powitania.
// Wartość w inpucie jest oczyszczana z białych znaków na krańcach.
// Jeśli input jest pusty lub zawiera tylko spacje, to zamiast imienia w spanie pojawi się ciąg "Anonymous".
