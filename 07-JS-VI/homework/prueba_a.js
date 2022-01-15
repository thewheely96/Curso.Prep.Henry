///Callback (CB)
const { forEach } = require("./homework");

function decirHolaAlUsuario(usuario){
    return 'Hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario){
    return 'Adios ' + usuario + '!';
}

function crearSaludo(usuario,cb){
    return cb(usuario);
}

crearSaludo('Pa',decirHolaAlUsuario);
crearSaludo('Pa',decirAdiosAlUsuario);
////
///.forEach

const autos = ['Ford','Chevrolet','Toyota','Tesla'];

autos.forEach(function(elemento,indice){
  console.log(elemento);
});

///o podemos crear una instance de una funcion
function mostrarNombres(elemento){
    console.log(elemento);
}
autos.forEach(mostrarNombres);

/////
//.Reduce 

const numeros = [1,2,3,4,5,6,7,8,9];
const palabras = ['Hola','mi','nombre','es','Paul'];

const suma = numeros.reduce(function(acc,elemento){
      return acc + elemento;
});

// Podemos escribir una función fuera de los parents de .reduce (para usar varias veces más tarde)
///function multiplicarDosNumeros(a, b) {
   // return a * b;
//  }
//const productos = numeros.reduce(multiplicarDosNumeros);

const productos = numeros.reduce(function(acc,elemento){
    return acc * elemento;
})

///acumulador de arranque
const frases = palabras.reduce(function(acc,elemento){
    return acc + ' ' + elemento;    
},'Frase Completa:');

console.log(suma);
console.log(productos);
console.log(frases);

////.map

const numeros = [2,3,4,5];

const doble = numeros.map(function(elemento){
      return elemento * 2;
})

const triple = numeros.map(function(elemento){
      return elemento * 3;
})

console.log(doble);
console.log(triple); 

///////
//repaso .forEach
var alumnos = ['mati','leo','tincho','emi','jimmy','franco'];

//sin callbacks
//for (var i = 0; i < alumnos.length ; i++){
    //console.log(alumnos[i]);
//}
alumnos.forEach(function(elemento,indice){
console.log (elemento)
})

//repaso .map
//con cbs

var alumnos = ['mati','leo','tincho','emi','jimmy','franco'];

//String.prototype.capitalize = function(){
    //return this.charAt(0).toUpperCase() + this.slice(1)
//}   

var nuevoAlumnos = alumnos.map(function(elemento,indice){
    return elemento.capitalize();
})
console.log(nuevoAlumnos);

///sin callbacks

//var nuevoArray = [];
//for (var i=0; i<alumnos.length; i++){
    //nuevoArray.push(alumnos[i].capitalize());
//}
