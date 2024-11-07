let puntuacio = 100;
const boto = document.getElementById("afegir");
document.getElementById("hola").innerHTML = "La teva punctuació és de " +puntuacio;



function resta1(){
   puntuacio -= 1
   document.getElementById("hola").innerHTML = "La teva punctuació és de "+puntuacio;
}

function resta2(){
   puntuacio -= 5
   document.getElementById("hola").innerHTML = "La teva punctuació és de "+puntuacio;

}

function resta3(){
   puntuacio -= 10
   document.getElementById("hola").innerHTML = "La teva punctuació és de "+puntuacio;

}
let newPuntuacio = puntuacio

if(newPuntuacio < 0){
alert("kf")
}

function submit(){
   alert("Has enviat els resultats. Ara tens " +puntuacio+" punts"
   )
}