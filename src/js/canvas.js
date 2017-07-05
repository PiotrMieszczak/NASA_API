//Canavas setup
const canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.arc(100,100,10,0,Math.PI*2);
ctx.fill();