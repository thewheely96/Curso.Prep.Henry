var lista = [1, 2, 3, 4, 5];

for (var i = 0; i < lista.length; i++){
    console.log(lista[i])
}

////
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Paul', 'Sapo', 'chao'];
while( lista.length > 0){
    console.log(lista.pop());
}

const string = "freeCodecamp";

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

capitalizarPrimeraLetra(string); // Retorna "FreeCodecamp"