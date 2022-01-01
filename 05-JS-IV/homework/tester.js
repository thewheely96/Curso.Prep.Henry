const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for (let clave in usuario){
    console.log(clave);
    console.log(usuario[clave]);
}

/////
const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42,
    decirHola: function(){
        console.log( this.username + ' manda saludos!');
    }
};

usuario.decirHola(); // 'juan.perez manda saludos!'

///
var o = {
    prop: 37,
    f: function() {
      return this.prop;
    }
  };

 console.log(o.f());

///

var o = {prop: 37};

function loguea() {
    return this.prop;
  }

o.f = loguea;
console.log(o.f());

/////
var obj = {
  nombre: 'Objeto',
  log   : function(){
    this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
    console.log(this); // obj

    var that = this; // Guardo la referencia a this

    var cambia = function( str ){
      that.nombre = str;  // Uso la referencia dentro de esta funcion
    }

    cambia('Hoola!!');
    console.log(this);
  }
}

/////
var Paul = {
  nombre : 'Paul',
  edad : 25,
  apellido : 'Gomez',
  saludar : function(){
console.log('hola ,Paul');
  },
  hobbies : ['fotografia', 'dibujar', 'futbol'],
}
///// propiedades
var objeto = {
  propiedad : 'valor',
}

console.log(objeto.propiedad);
console.log(objeto['propiedad']);

///asignando valores
objeto.nuevaPropiedad = 1;
objeto['otraPropiedad'] = 2;

//eliminando propiedades

delete objeto.otraPropiedad;
//// THIS... referencia al objeto donde invoco el metodo
persona ={
  nombre : 'Paul',
  saludar : function(){
    console.log('Hola, ' + this.nombre);
  }
}
//// ejemplos THIS
function saludar(){
  console.log('Hola, ' + this.nombre);
}
var Paul = {
  nombre : 'Paul',
  saludar: saludar,
}
var Perro = {
  nombre : 'Perro',
  saludar : saludar,
}

///
var objeto = {
edad : 13,
getEdad : function(){
  return this.edad * 2;
}
}
///
function getEdad(){
  return this.edad;
}
var obj1 = {
  edad : 32 * 2,
  getEdad : getEdad,
}

var obj2 = {
  edad : 25-2,
  getEdad : getEdad,
}