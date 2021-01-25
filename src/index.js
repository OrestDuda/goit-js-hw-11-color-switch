import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
let intervalId = null;
console.log(colors.length);

start.addEventListener('click', startChange);
stop.addEventListener('click', stopChange);

function colorChange() {
  let color = randomIntegerFromInterval(0, colors.length - 1);
  body.setAttribute('style', `background: ${colors[color]}`);
}

function startChange() {
  intervalId = setInterval(colorChange, 1000);
  start.disabled = true;
}

function stopChange() {
  clearInterval(intervalId);
  start.disabled = false;
}
