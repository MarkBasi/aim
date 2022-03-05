start = document.querySelector('button');
settings = document.querySelector('.settings');
body = document.querySelector('body');
const score = document.createElement('div');
const endMenu = document.createElement('div');
let time = document.createElement('div');
let i,
    dificult,
    dificultDelay;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

start.addEventListener('click', () => {
    i = 0;
    dificult = +document.querySelector('input').value;
    dificultDelay = 3000 - (document.querySelector('input').value * 350);
    settings.remove();
    game();
});

function game() {
    body.prepend(score);
    score.className = 'score';
    score.innerText = 0;
    time = body.appendChild(time);
    time.innerText = 30;
    setInterval(() => {
    time.innerText = time.innerText - 1;
    if (time.innerText == 0) {
        body.prepend(endMenu);
        endMenu.className = 'endMenu';
        endMenu.innerText = `Ваш счет: ${i}`;
    }
    }, 1000);
    createElement();
}

function createElement() {
    let circle = document.createElement('div');
    body.append(circle);
    circle.id = i;
    circle.className = `circle_${dificult}`;
    circle.style = `top:${getRandomInt(900)}px; left:${getRandomInt(1700)}px;`;
    setTimeout(() => {
        circle.remove()
    },
    dificultDelay);
    circle.addEventListener('click', () => {
        circle.remove();
        i++;
        score.innerText = i;
        createElement();
    });
}

document.addEventListener('click', e => {
    if (e.target.nodeName == 'HTML') {
        i--;
        score.innerText = i;
        if (i < 0) {
            alert(' GAME OVER ');
            i = 0;
        }
    }
})

