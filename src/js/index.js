import sytle from '../style/style.scss';
import { mama } from '../js/buttons.js';
import doubl_click from '../doubl_click.wav';
const increase_btn = document.querySelector('.increase_button');
const decrease_btn = document.querySelector('.decrease_button');
const paragraph = document.querySelector('.text');

let i = 0;
const text = 'Rock, Paper, Scissors';
function add() {
  if (i < text.length) {
    paragraph.textContent += text.charAt(i);
    i++;
  }
  setTimeout(add, 100);
}
add();

// let i = 0;
// let text2 = 'Rock, Paper, Scissors?';
// function write() {
//   if (i < text2.length) {
//     paragraph.textContent += text2.charAt(i);
//     i++;
//   }
//   setTimeout(write, 100);
// }

// write();

// typewriter();
const btn = document.querySelector('.btn_sound');
const sound = new Audio(doubl_click);
function playSound() {
  sound.play();
}
btn.addEventListener('click', playSound);

// function typewriter() {
//   if (i < text2.length) {
//     paragraph.textContent += text2.charAt(i);
//     i++;
//   }
//   setTimeout(typewriter, 100);
// }
