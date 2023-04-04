"use strict";


//  Домашне завдання 6


// 1
// const categoriesList = document.querySelector('#categories');
// const categoriesItems = categoriesList.querySelectorAll('.item');

// console.log(`Number of categories: ${categoriesItems.length}\n`);

// categoriesItems.forEach(item => {
//   const categoryName = item.querySelector('h2').innerText;
//   const categoryElementsCount = item.querySelector('ul').childElementCount;

//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElementsCount}\n`);
// });



// 2
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ul = document.querySelector('#ingredients');

// const liElements = ingredients.map(ingredient => {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add('item');
//   return li;
// });

// ul.append(...liElements);




// 3
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryList = document.querySelector('.gallery');

// const imagesMarkup = images.map(({ url, alt }) => {
//   return `
//     <li class="gallery__item">
//       <img class="gallery__img" src="${url}" alt="${alt}">
//     </li>
//   `;
// }).join('');

// galleryList.insertAdjacentHTML('beforeend', imagesMarkup);



// 4.
// const counterValue = 0;
// const valueEl = document.querySelector('#value');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');

// incrementBtn.addEventListener('click', () => {
//   valueEl.textContent = ++counterValue;
// });

// decrementBtn.addEventListener('click', () => {
//   valueEl.textContent = --counterValue;
// });



// 5
// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// input.addEventListener("input", (event) => {
//   output.textContent = event.target.value.trim() || "Anonymous";
// });




// 6
// <script>
//   const inputEl = document.querySelector('#validation-input');

//   inputEl.addEventListener('blur', onInputBlur);

//   function onInputBlur(event) {
//     const inputLength = event.target.value.length;
//     const requiredLength = Number(event.target.getAttribute('data-length'));

//     if (inputLength === requiredLength) {
//       inputEl.classList.remove('invalid');
//       inputEl.classList.add('valid');
//     } else {
//       inputEl.classList.remove('valid');
//       inputEl.classList.add('invalid');
//     }
//   }
// </script>

// CSS

// <style>
//   #validation-input {
//     border: 3px solid #bdbdbd;
//   }

//   #validation-input.valid {
//     border-color: #4caf50;
//   }

//   #validation-input.invalid {
//     border-color: #f44336;
//   }
// </style>




// 7

// <script>
//   const input = document.querySelector('#font-size-control');
//   const span = document.querySelector('#text');
  
//   input.addEventListener('input', event => {
//     const fontSize = event.currentTarget.value + 'px';
//     span.style.fontSize = fontSize;
//   });
// </script>




// 8
// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', e => {
//   e.preventDefault(); // запобігає перезавантаженню сторінки при відправленні форми

//   const { email, password } = e.target.elements;
//   // отримуємо доступ до елементів форми

//   if (email.value.trim() === '' || password.value.trim() === '') {
//     alert('All fields must be filled!');
//     return;
//   }
//   // перевіряємо, чи всі поля заповнені

//   const formData = {
//     email: email.value,
//     password: password.value,
//   };
//   console.log(formData); // виводимо об'єкт із введеними даними в консоль

//   e.target.reset(); // очищаємо значення полів форми
// });





// 9
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Change Background Color</title>
//     <style>
//       body {
//         transition: background-color 0.5s ease-in-out;
//       }
//       .widget {
//         margin-top: 50px;
//         text-align: center;
//       }
//       .color {
//         font-weight: bold;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="widget">
//       <p>Background color: <span class="color">-</span></p>
//       <button type="button" class="change-color">Change color</button>
//     </div>

//     <script>
//       const button = document.querySelector(".change-color");
//       const colorSpan = document.querySelector(".color");

//       function getRandomHexColor() {
//         return `#${Math.floor(Math.random() * 16777215)
//           .toString(16)
//           .padStart(6, 0)}`;
//       }

//       button.addEventListener("click", () => {
//         const randomColor = getRandomHexColor();
//         document.body.style.backgroundColor = randomColor;
//         colorSpan.textContent = randomColor;
//       });
//     </script>
//   </body>
// </html>




// 10
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// <script>
//   const inputEl = document.querySelector('#controls input');
//   const createBtn = document.querySelector('[data-create]');
//   const destroyBtn = document.querySelector('[data-destroy]');
//   const boxesContainer = document.querySelector('#boxes');

//   createBtn.addEventListener('click', createBoxes);
//   destroyBtn.addEventListener('click', destroyBoxes);

//   function createBoxes() {
//     const amount = inputEl.valueAsNumber;
//     const boxes = [];

//     for (let i = 0; i < amount; i += 1) {
//       const size = 30 + i * 10;
//       const boxEl = document.createElement('div');
//       boxEl.style.cssText = `
//         width: ${size}px;
//         height: ${size}px;
//         background-color: ${getRandomHexColor()};
//         margin-bottom: 10px;
//       `;
//       boxes.push(boxEl);
//     }

//     boxesContainer.append(...boxes);
//   }

//   function destroyBoxes() {
//     boxesContainer.innerHTML = '';
//   }

//   function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
// </script>
















// const numb1 = 0.3 
// const numb2 = 0.6
// const sum1 =numb1 + numb2
// console.log (numb1+numb2)

// console.log (Number (sum1.toFixed(3)))


// console.log (1 +" 2")

// console.log(0 || ('0' && {}));


// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
    
//   switch (password) { // Change this line
//      case null : // Change this line
//         message = "Canceled by user!"; // Change this line
//         break;
  
//       case ADMIN_PASSWORD: // Change this line
//         message = "Welcome!"; // Change this line
//         break;
  
//     default:
//     message = "Access denied, wrong password!";
  
//     // Change code above this line
//     return message;}
//   }
  
//   console.log (checkPassword("mangohackzor"));
//   console.log (checkPassword(null));
//   console.log (checkPassword("polyhax"));
//   console.log (checkPassword("jqueryismyjam"));

//   function getShippingCost(country) {
//     let message;
//     // Change code below this line
//   switch (country) { 
//      case "China":
//         message = `Shipping to ${China} will cost ${100} credits`; 
//         break;
//       case "Chile":
//         message = `Shipping to ${Chile} will cost ${250} credits`; 
//         break;
//       case "Australia":
//         message = `Shipping to ${Australia} will cost ${170} credits`; 
//         break;
//       case "Jamaica":
//         message = `Shipping to ${Jamaica} will cost ${120} credits`; 
//         break;
  
//     default:
//       message = "Sorry, there is no delivery to your country" 
//   }
//     // Change code above this line
//     return message;
//   }
  
//   console.log (getShippingCost("Australia"));
//   console.log (getShippingCost("Germany"));
//   console.log (getShippingCost("China"));
//   console.log (getShippingCost("Chile"));
//   console.log (getShippingCost("Jamaica"));
//   console.log (getShippingCost("Sweden"));
//   console.log (getShippingCost("Australia"));
//   console.log (getShippingCost("Germany"));
//   console.log (getShippingCost("China"));
//   console.log (getShippingCost("Chile"));
//   console.log (getShippingCost("Jamaica"));
//   console.log (getShippingCost("Sweden"));
  

  // function getSubstring(string, length) {
  //   const substring = getSubstring.slice(`string`, `length`); // Change this line
  
  //   return substring;
  // }
  
  // console.log (getSubstring("Hello world", 3));
  // console.log (getSubstring("Hello world", 6));
  // console.log (getSubstring("Hello world", 8));
  // console.log (getSubstring("Hello world",11));
  // console.log (getSubstring("Hello world", 0));

  // const substring = getSubstring.slice()


  // Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

  // function checkPassword (ournumber) {
  //   if (ournumber === 10) {
  //     return 'Вірно';
  //   }
  //   return 'Невірно'
  // }

  // console.log (checkPassword(10));

//   function checkSeason (number) {
//   let result ="";
// switch (number) {

//   case 1:
//     result ='Зима';
//     break;
//     case 2:
//       result ='Весна';
//       break;
//       case 3:
//         result ='Осінь';
//         break;
//         case 4:
//           result ='Літо';
//           break;
//           default: result = 'Іди в дупу, ти тупий.....живи в печері далі'
// }
// return result;
//   }

//   console.log (checkSeason(5));


// Напишіть програму, яка отримає від користувача

//число (кількість хвилин) і виведе у консоль

//рядок у форматі годин і хвилин

//70 === 01:10

// function checkTime (minutes) {
// const hours = String(Math.floor(minutes / 60)).padStart(2,0);
// const minut = String(minutes % 60).padStart(2,0);

// return  `${hours}:${minut}`

// }

// console.log (checkTime(70));


//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// function checkPassword(){
// const login = prompt("Доведи що ти не лох");
// if (login === 'Альфа') {
//   const pass = prompt("Введи свою пісюху");
//   alert(pass === "Я Альфа" ? "Увійди в мене" : "Не дам!");
// } else if(!login) {
//   alert ("Йди в дупу");
// }else {
//   alert ("Я тобі не дам, я тебе незнаю")
// }
// }

// console.log (checkPassword('Альфа'));


//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems (array) {
 
//   for (let i = 1; i <= array.length; i += 1){
// console.log(`${i} - ${array[i-1]}`);

//   }
// }
// logItems(['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']);






//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

//Напишіть скрипт, який замінює регістр кожного символу
//У стрічці на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'




// const username = "Mango";
// console.log("Username is",username);

// const message = "JavaScript is awesome!";
// alert(message);

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// let value = 5;
// value -= 10;
// console.log(value);



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }




// Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

setTimeout(function() {
  console.log('Цей код виконується через 2 секунди');
}, 2000);