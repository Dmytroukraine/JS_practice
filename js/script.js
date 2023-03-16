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
  

  function getSubstring(string, length) {
    const substring = getSubstring.slice(`string`, `length`); // Change this line
  
    return substring;
  }
  
  console.log (getSubstring("Hello world", 3));
  console.log (getSubstring("Hello world", 6));
  console.log (getSubstring("Hello world", 8));
  console.log (getSubstring("Hello world",11));
  console.log (getSubstring("Hello world", 0));