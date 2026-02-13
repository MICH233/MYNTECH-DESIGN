// WhatsApp
document.getElementById("formulario").addEventListener("submit",function(e){
e.preventDefault();

let nombre=document.getElementById("nombre").value;
let correo=document.getElementById("correo").value;
let mensaje=document.getElementById("mensaje").value;

let numero="51907892266";

let texto=`Hola, soy ${nombre}%0AEmail: ${correo}%0AMensaje: ${mensaje}`;

window.open(`https://wa.me/${numero}?text=${texto}`,'_blank');
});


// Partículas suaves
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<60;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*3+1,
speed:Math.random()*0.5+0.2
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
ctx.beginPath();
ctx.fillStyle="rgba(124,198,255,0.6)";
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

p.y+=p.speed;
if(p.y>canvas.height){
p.y=0;
p.x=Math.random()*canvas.width;
}
});

requestAnimationFrame(draw);
}

draw();
// MENU HAMBURGUESA
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
