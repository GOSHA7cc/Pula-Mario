const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreCounter = document.querySelector('.score-counter');

let score = 0;
let canIncrementScore = true;

scoreCounter.textContent = 'Pontuação: 0'

const jump = () => {
    if(!mario.classList.contains('jump')) {    
        mario.classList.add("jump");
        
        setTimeout(() => {
            mario.classList.remove("jump");
        }, 500);
    }
};

const incrementScore = () => {
    if (canIncrementScore) {
      score++;
      scoreCounter.textContent = `Pontuação: ${score}`;
    }
  };

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        canIncrementScore = false;
        clearInterval(loop);
    } else if (pipePosition === 0) {
        canIncrementScore = true;
    }

}, 10); 

document.addEventListener("keydown", jump);
pipe.addEventListener('animationiteration', incrementScore);