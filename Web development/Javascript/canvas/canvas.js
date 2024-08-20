let ctx = document.getElementById('myCanvas');


ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

let c = ctx.getContext('2d');

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.moveTo(300,100);
c.quadraticCurveTo(400,500,300,500);

c.strokeStyle = "blue";

c.stroke()

c.beginPath()
c.arc(400,400,30,0,Math.PI*2,false)
c.stroke()

