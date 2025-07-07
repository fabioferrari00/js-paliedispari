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

