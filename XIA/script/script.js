import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
let puntuacio = 0;


const input = document.getElementById("inputFiled");

const appSettings = {
   databaseURL: "https://apostes-deportives-default-rtdb.europe-west1.firebasedatabase.app/"
}


const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const tasks = ref(baseDades, "events")

onValue(tasks, function (snapshot) {
   if (snapshot.exists()) {

      let resultats = Object.entries(snapshot.val())
    
      let numAl = Math.floor(Math.random()*38)
    

      pintar(resultats[numAl])

   }
})

function pintar(e){
   console.log(e)
  
   let titol = document.getElementById("titol");
   let h1 = document.createElement("h1");
   let p = document.createElement("p");
   let resultat = document.createElement("p");
   resultat.id = "sol";
   resultat.textContent = e[1].Resultat;
   

   h1.textContent = e[1].Titol
   p.textContent =  e[1].Data

   titol.appendChild(h1);
   titol.appendChild(p)

   let fotos = document.getElementById("fotos");
   let fot1 = document.createElement("img");
   let fot2 = document.createElement("img");
   fot1.src = e[1].URL1
   fot2.src = e[1].URL2

   fot1.classList += "fotos"
   fot2.classList += "fotos"

   
   fotos.appendChild(fot1)
   fotos.appendChild(fot2)
   resultat.hidden = true;
   titol.appendChild(resultat)

}

document.getElementById("hola").innerHTML = "La teva punctuació és de " + puntuacio;


   
document.getElementById("submit").addEventListener("click", function(){
   let resultatMeu = document.getElementById("res").value
   let solucio = document.getElementById("sol").textContent;

   if(resultatMeu==solucio){
      alert("Has acertat, molt bé.")
      puntuacio+=10
      document.getElementById("hola").innerHTML = "La teva punctuació és de " + puntuacio;

   }else{
      alert("Has fallat, el resultat era: " + solucio)
      puntuacio-=5
      document.getElementById("hola").innerHTML = "La teva punctuació és de " + puntuacio;


   }
   pintarOtro();

})


function pintarOtro(){
   document.getElementById("titol").textContent=""
   document.getElementById("fotos").textContent="";
   onValue(tasks, function (snapshot) {
      if (snapshot.exists()) {
   
         let resultats = Object.entries(snapshot.val())
       
         let numAl = Math.floor(Math.random()*38)
       
   
         pintar(resultats[numAl])
   
      }
   })
}