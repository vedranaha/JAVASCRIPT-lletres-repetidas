//Ejercicio 1//
var lletres;
lletres=["v","e","d","r","a","n","a"];
for (i=0;i<lletres.length;i++) {
    console.log(lletres[i]);
}

//Ejercicio 2//
var nombre=["v","e","d","r","a","n","a","4"];
console.log("Partim del nom: " + nombre.join(""));
for (var i=0; i<nombre.length; i++) {
  if (!isNaN(nombre[i])) {
    console.log("es el numero: " + nombre[i]);
    }else{
  if (nombre[i]==["e","a","i","o","u"]) {
      console.log("He trobat la VOCAL: " + nombre[i]);
    }
  else {
      console.log("He trobat la CONSONANT: " + nombre[i]);
  }
    }
}

//Ejercicio 3//
var repeticiones = new Map();
var nombre=["v","e","d","r","a","n","a"];    
for (var i=0; i<nombre.length; i++) {
  if (repeticiones.has(nombre[i])){
      repeticiones.set(nombre[i], repeticiones.get(nombre[i]) + 1);
      } 
  else {
      repeticiones.set(nombre[i], 1)} 
      }
  console.log(repeticiones);
  
//Ejercicio 4//
var nombre=["v","e","d","r","a","n","a"];   
var apellido=["h","a","s","a","n","b","a","s","i","c"];  
nombre.splice( 7, 0," ");       //or nombre.push(" ");
var nombre_completo=nombre.concat(apellido);
console.log(nombre_completo);




 