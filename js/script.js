"use strict";

// console.log (Number(true+true)); 

// console.log (0.1+0.3)

// console.log (0.1+0.3==0.4)



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