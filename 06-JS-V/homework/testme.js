function Gato(nombre) {
    // El nuevo operador crea un objeto, "this"
    this.nombre = nombre;
    this.maullar = function() {
        return 'Mi nombre es ' + this.nombre + ' ... Meow!';
    }
    // Devuelve el objeto "this"
}

const sam = new Gato('Sam');
const kitty = new Gato('Kitty');
console.log(sam.maullar()); // 'Mi nombre es Sam ... Meow!'
console.log(kitty.maullar()); // 'Mi nombre es Kitty ... Meow!'

//////

function Usuario(nombre, github) {
    this.nombre = nombre;
    this.github = github;
}

Usuario.prototype.presentacion = function(){
    return 'Mi nombre es ' + this.nombre + ', mi usuario de Github es ' + this.github + '.';
}

let juan = new Usuario('Juan', 'juan.perez');
let antonio = new Usuario('Antonio', 'atralice');

console.log(juan.presentacion()); // Mi nombre es Juan, mi usuario de Github es juan.perez.
console.log(antonio.presentacion()); // Mi nombre es Antonio, mi usuario de Github es atralice.


////prototype de un objeto
var obj = Object.create({})

// creo un objeto a partir de un proto de Objeto
var obj = Object.create(Object.prototype)

//// asignar valores al objeto
var obj = {}

// No hace falta guardar el resultado porque los objetos se pasan por `referencia`
Object.assign(obj, {nombre:'Emi', apellido:'Chequer'})

obj.nombre

////Herencia
function Persona(nombre,apellido,ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
  }

Persona.prototype.saludar = function() {
    console.log('Soy '+ this.nombre +' de ' + this.ciudad);
  }

var Emi = new Persona('Emi', 'Chequer', 'Buenos Aires');
var Paul = new Persona('Paul', 'Gomez', 'Bogota');

Paul.saludar()
//usamos constructores anidados
function Alumno (nombre,apellido,ciudad,curso){
    Persona.call(this,nombre,apellido,ciudad);
    this.curso = curso;
}
Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.constructor = Alumno

var tony = new Alumno ('Tony', 'Montana', 'Tucuman', '001');
tony.saludar()
////
function Car (marca, cv, color){
 this.marca = marca;
 this.cv = cv;
 this.color = color;
}

var audi = new Car ('Audi', '2200', 'Negro');


/// constructors y new

function Persona(nombre, apellido){
    this.nombre = nombre || 'Juan';
    this.apellido = apellido || 'Perez';
}
var toni = new Persona ('Toni' , 'Tralice');
var emi = new Persona ('Emi' , 'Cheuqer')

////prototype
var persona = {
    nombre : 'Default',
    apellido : 'Default',
    getNombre :  function(){
              return this.nombre + ' ' + this.apellido  ;
    }
}

var Paul = {
    nombre : 'Paul',
    apellido : 'Gomez'
}
Paul.__proto__ = persona;
Paul.getNombre();

////proto y constructores metodo 1

function Persona (nombre,apellido, edad){
    this.nombre = nombre || 'Juan';
    this.apellido = apellido || 'Perez';
    this.edad = edad || 25;
}
Persona.prototype.getNombre = function (){
    return this.nombre + ' ' + this.apellido;
}

Persona.prototype.getEdad = function(){
    return this.edad + ' ' + 'años';
}
var Toni = new Persona('Toni','Tralice','25');
var Peter = new Persona('Peter', 'Parker','34');
var Perro = new Persona('Perro', 'Perrez','55');

var totalA = Toni.getNombre() + ' ' + 'tiene ' +  Toni.getEdad();
var totalB = Peter.getNombre() + ' ' + 'tiene ' +  Peter.getEdad();
var totalC = Perro.getNombre()+ ' ' + 'tiene ' + Perro.getEdad();
/////ejemplo
///metodo 2

var person = {
    nombre : 'Default',
    apellido : 'Default'
}
var toni = Object.create(person);
console.log(toni);
console.log(toni.__proto__)

//metodo3 ES6 y clases(class)

class Persona {
    constructor (nombre, apellido){
            this.nombre = nombre;
            this.apellido = apellido;
    }
    getNombre(){
        return this.nombre
    }
    saludar (){
        return 'Hola! ' + this.nombre + this.apellido;
    }
}
///var Toni = new Empleado('Toni', 'Tralice');
///Toni.saludar();

class Empleado extends Persona {
    constructor (nombre,apellido,empleo,sueldo){
        super(nombre,apellido);
        this.empleo = empleo;
        this.sueldo = sueldo;
    }
}

var Toni = new Empleado('Toni', 'Tralice', 'Profesor', 100);
Toni.saludar();