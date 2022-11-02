'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🏆 Correct Number!!';
document.querySelector('.number').textContent = 23;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 55;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ No number!!!!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😒 You lost the Game!!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🏆 Correct Number!!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').value = score;
      if (score > highscore) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
      document.body.style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
    } else {
      document.querySelector('.message').textContent =
        '😒 You lost the Game!!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆Too High';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😒 You lost the Game!!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😒 You lost the Game!!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').value = highscore;
  document.querySelector('.guess').value = '';
});
