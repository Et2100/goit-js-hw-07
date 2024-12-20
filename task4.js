// Zadanie 4

// Napisz skrypt do zarządzania formularzem logowania.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Log in</button>
// </form>
const formLog = document.querySelector(".login-form");

formLog.addEventListener("submit", event => {
    event.preventDefault();
    const {email, password} = formLog.elements;
    const login = email.value.trim();
    const pass = password.value.trim();
    if (login === "" && password === "") {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        email: login,
        password: pass,
      };
    
      // Wyświetlenie obiektu w konsoli
      console.log(formData);
    
      // Czyszczenie formularza
      formLog.reset();
    
       
});

// Przetwarzanie wysyłania formularza form.login-form powinno odbywać się poprzez zdarzenie submit.
// Podczas wysyłania formularza strona nie powinna być przeładowywana.
// Jeśli podczas submit w formularzu są nieuzupełnione pola, wyświetl alert z komunikatem 'All form fields must be filled in'. Nie dodawaj atrybutu required do inputów, walidacja powinna odbywać się za pomocą JS.
// Jeśli użytkownik wypełnił wszystkie pola i wysłał formularz, zbierz wartości pól do obiektu z dwoma właściwościami, gdzie kluczem jest nazwa inputów, a wartością są odpowiednie wartości tych inputów, oczyszczone z białych znaków na krawędziach. Do uzyskania dostępu do elementów formularza użyj właściwości elements.
// Przy submit formularza wypisz obiekt z wprowadzonymi danymi w konsoli i zresetuj wartości pól formularza za pomocą metody reset.


// Na co zwróci uwagę mentor podczas sprawdzania:

// Nasłuchuje zdarzenia submit.
// Podczas wysyłania formularza strona nie jest przeładowywana.
// Jeśli podczas submit w formularzu są nieuzupełnione pola, wyświetla alert.
// Przy submit formularza w konsoli wypisuje obiekt z dwoma właściwościami, gdzie klucze to nazwy inputów, a wartości to odpowiednie wartości tych inputów, oczyszczone z białych znaków na krawędziach.
// Po submit formularza wartości pól są czyszczone.
