// Building a console magic 8 ball using control flow!

// const userName = prompt('What is your name?');
// const userQuestion = prompt(
//   'What question do you want to ask the Magic 8 Ball?'
// );
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

// Checks if a user name was put in or not, if not it just says hello in the console.
userName ? console.log(`Hello,${userName}`) : console.log('Hello!');

console.log(userQuestion);

// 8 ball logic
let eightBall = '';

if (randomNumber === 0) {
  eightBall = console.log('It is certain');
} else if (randomNumber === 1) {
  eightBall = console.log('It is decidedly so');
} else if (randomNumber === 2) {
  eightBall = console.log('Reply hazy try again');
} else if (randomNumber === 3) {
  eightBall = console.log('Cannot predict now');
} else if (randomNumber === 4) {
  eightBall = console.log('Do not count on it');
} else if (randomNumber === 5) {
  eightBall = console.log('My sources say no');
} else if (randomNumber === 6) {
  eightBall = console.log('Outlook not so good');
} else if (randomNumber === 7) {
  eightBall = console.log('Signs point to yes');
}
