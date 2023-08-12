document.addEventListener("DOMContentLoaded",() =>{
const div=document.getElementById("contenedor");
const bot=document.getElementById("boton");
bot.addEventListener("click", (e)=>{
    alert("Hola");
    e.stopPropagation();
})
div.addEventListener("click",(e)=>{
    alert("Hola! Soy el div");
})
})