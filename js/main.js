console.log("Funcionando!");

//ejercicio 2
let n1 = parseInt(prompt("Ingrese un numero mayor a 0"));
let n2 = parseInt(prompt("Ingrese un numero distinto mayor a 0"));

var suma = n1 + n2;
var resta = n1 - n2;
var division = n1 / n2;
var multiplicacion = n1 * n2;
var modulo = n1 % n2;

console.log("La suma de los numeros es " + suma);
console.log("La resta de los numeros es " + resta);
console.log("La division de los numeros es " + division);
console.log("La multiplicacion de los numeros es " + multiplicacion);
console.log("El modulo de los numeros es " + modulo);

//ejercicio 3

let C = parseInt(prompt("Ingrese la temperatura en grados Celsius"));

var K = C + 273.15;
var F = (C * 9) / 5 + 32;

console.log("La temperatura es equivalente a " + K + " K");
console.log("La temperatura es equivalente a " + F + " °F");

//ejercicio 4

let xdias = parseInt(prompt("Ingrese una cantidad de dias"));

var anos = Math.floor(xdias / 365);
var semanas = Math.floor((xdias % 365) / 7);
var dias = Math.floor((xdias % 365) % 7);

console.log(
  "La cantidad de dias es igual a " +
    anos +
    " año(s), " +
    semanas +
    " semana(s), " +
    dias +
    " dia(s)"
);

//ejercicio 5

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un segundo numero"));
let num3 = parseInt(prompt("Ingrese un tercer numero"));
let num4 = parseInt(prompt("Ingrese un cuarto numero"));
let num5 = parseInt(prompt("Ingrese un quinto numero"));

var sumatotal = num1 + num2 + num3 + num4 + num5;
var promedio = sumatotal / 5;

console.log("La suma de los numeros es " + sumatotal + " y el promedio de los numeros es " + promedio);

