function isPalindrome(text) {
  const reversedWord = text.split('').reverse().join('');

  if (reversedWord === text) {
    return true;
  } else {
    return false;
  }
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


const userCheck = prompt('Pari o dispari?');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
const pcNumber = generateRandomNumber(1, 5);
const sumNumbers = pcNumber + userNumber;
let pcPoints = 0;
let userPoints = 0;


console.log(`Hai scelto: ${userCheck}, Il tuo numero è: ${userNumber},Il numero del pc è: ${pcNumber}`);

if (checkEvenOrOdd(sumNumbers) === `pari`) {
  console.log(`La somma: ${sumNumbers} è pari`);
} else {
  console.log(`La somma: ${sumNumbers} è dispari`);
}

if (checkEvenOrOdd(sumNumbers) === userCheck) {
  userPoints++;
} else {
  pcPoints++;
}

if (userNumber > pcNumber) {
  userPoints++;
} else if (userNumber < pcNumber) {
  pcPoints++;
} else {
  console.log(`Tu e il pc avete inserito lo stesso numero`);
}

if (pcPoints < userPoints) {
  console.log(`L'utente ha ottenuto ${userPoints} punti. Il pc ha ottenuto ${pcPoints} punti. Hai vinto`);
} else if (pcPoints > userPoints) {
  console.log(`L'utente ha ottenuto ${userPoints} punti. Il pc ha ottenuto ${pcPoints} punti. Hai perso`);
} else {
  console.log(`L'utente ha ottenuto ${userPoints} punti. Il pc ha ottenuto ${pcPoints} punti. Hai pareggiato`);
}

