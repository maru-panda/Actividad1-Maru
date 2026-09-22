import promptSync from "prompt-sync"
const prompt = promptSync()

//Variables de Productos.
let fresa = 100;
let carambola = 400;
let calabaza = 100;
let cantidadFresa = prompt("Cuantas semillas de fresas desea comprar: ");
let cantidadCarambola = prompt("Cuantas semillas de carambolas desea comprar: ");
let cantidadCalabaza = prompt("Cuantas semillas de calabazas desea comprar: ");

//Dinero del granjero
let oro = prompt("Ingrese la cantidad de oro que tiene el granjero: ");

//Total y Vuelto
let TotalCompra = (fresa * cantidadFresa) + (carambola * cantidadCarambola) + (calabaza * cantidadCalabaza);
let vuelto =  oro - TotalCompra;

if (oro >= TotalCompra) {
    console.log("Total a pagar es: $", TotalCompra);
    console.log("Vuelto Total: $", vuelto);
}
else {
    console.log("No tiene suficiente dinero para realizar la compra.");
}