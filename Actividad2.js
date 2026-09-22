import promptSync from "prompt-sync"
const prompt = promptSync()

let nombre = prompt("Ingrese su nombre: ");
let edad = Number(prompt("Ingrese su edad: "));

let HxS = Number(prompt("¿Cuantas horas dedicas a programar por semana?: "));

let like = prompt("¿Te gusta programar? (si/no): ");
let likeit = like == "si";

let mayorEdad = edad >= 18;

console.log("Nombre: ", typeof nombre, nombre);
console.log("Edad: ", typeof edad, edad);
console.log("Horas de programación por semana: ", typeof HxS, HxS);
console.log("¿Le gusta programar?: ", typeof likeit, likeit);
console.log("¿Es mayor de edad?: ", typeof mayorEdad, mayorEdad);