const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
/*
ctx.fillStyle = 'blue';
ctx.fillRect(20 , 20 , 150 , 100);
ctx.fillStyle = '#999'
ctx.fillRect(200 , 20 , 150 , 100);

ctx.lineWidth = 8;
ctx.strokeRect(100, 200, 230, 200);

ctx.clearRect(25,25, 140, 36);

ctx.font = '19px Arial Black'
ctx.fillStyle = 'black';
ctx.fillText('canvas test', 250, 500);

*/

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150, 50);
ctx.stroke();
ctx.lineTo(100, 200);
ctx.lineTo(50,50);
ctx.closePath();
ctx.stroke();
ctx.fill();




// old crash course