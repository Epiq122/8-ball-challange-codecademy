const submitBtn = document.querySelector('.name-btn');
const questionBtn = document.querySelector('.question-btn');
const show = document.querySelector('.show').textContent;

const magicEightBall = () => {
  const randomNumber = Math.floor(Math.random() * 8);
  if (randomNumber === 0) {
    document.querySelector('.show').textContent = 'It is certain';
  } else if (randomNumber === 1) {
    document.querySelector('.show').textContent = 'It is decidedly so';
  } else if (randomNumber === 2) {
    document.querySelector('.show').textContent = 'Reply hazy try again';
  } else if (randomNumber === 3) {
    document.querySelector('.show').textContent = 'Cannot predict now';
  } else if (randomNumber === 4) {
    document.querySelector('.show').textContent = 'Do not count on it';
  } else if (randomNumber === 5) {
    document.querySelector('.show').textContent = 'My sources say no';
  } else if (randomNumber === 6) {
    document.querySelector('.show').textContent = 'Outlook not so good';
  } else if (randomNumber === 7) {
    document.querySelector('.show').textContent = 'Signs point to yes';
  }
};

const nameBtn = (e) => {
  e.preventDefault();

  const userName = document.querySelector('.user-name').value;
  document.querySelector(
    '.show-name'
  ).textContent = `Hello ${userName} ask a question using the input above`;
  document.querySelector('.user-name').value = '';
};

const newBtn = (e) => {
  const btn = document.createElement('button');
  btn.classList.add('ball');
  btn.innerHTML = 'Reveal ';

  const body = document.querySelector('body');
  document.querySelector('.btn');
  body.appendChild(btn);
  const reveal = document.querySelector('.ball');
  reveal.addEventListener('click', magicEightBall);
};

const awnser = (e) => {
  e.preventDefault();
  const question = document.querySelector('.ask-question').value;
  document.querySelector('.awnser').textContent = `${question}`;
  document.querySelector('.ask-question').value = '';
  newBtn();
};

// magicEightBall();
questionBtn.addEventListener('click', awnser);
submitBtn.addEventListener('click', nameBtn);
