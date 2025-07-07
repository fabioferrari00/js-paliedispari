function isPalindrome(text) {

  const reversedWord = text.split('').reverse().join('');
  let result = false;

  if (reversedWord === text) {
    result = true;
  }

  return result;

}

const userWord = prompt('Inserisci una parola per verificare se è palindroma');
let check = isPalindrome(userWord);

if (check) {
  console.log(`${userWord} è palindroma`);
} else {
  console.log(`${userWord} non è palindroma`);

}


//funzione per generare un numero random tra N e N
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione per vedere se il numero è pari o dispari
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `pari`;
  }
  else {
    return `dispari`;
  }
}


const userCheck = prompt('Pari o dispari?')
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
const pcNumber = generateRandomNumber(1, 5);

console.log(`usercheck ${userCheck}, user number ${userNumber}, pc number ${pcNumber}`)

const sumNumbers = pcNumber + userNumber;

if (checkEvenOrOdd(sumNumbers) === `pari`) {
  console.log(`La somma: ${sumNumbers} è pari`)
} else {
  console.log(`La somma: ${sumNumbers} è dispari`)
}


