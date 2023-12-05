//  Cliente

let usuario = prompt("Ingrese su nombre:")
let genero = prompt("¿Eres hombre, mujer u otro?")


switch (genero) {

    case "mujer":
        alert("Bienvenida " + usuario + ", como le va?")
        break;

    case "hombre":
        alert("Bienvenido " + usuario + ", como le va?")
        break;
    
    case "otro":
        alert("Bienvenidx " + usuario + ", como le va?")
        break;

    default:
        alert("Por favor, introducir un genero o escribir 'otro'")
        break;

}

// PRODUCTOS Y SUMA

let comprar = prompt("¿Que producto sera: taza o remera?")

let taza = 3500;
let remera = 5000;

let cantidad = parseInt(prompt("¿cuantas quiere?"))

const calcularIva = x => x * 0.21;

if (comprar === "taza") {
    let subtotal = cantidad * taza
    let total = subtotal + calcularIva(subtotal)
    console.log("El total a pagar es: " + total + " (incluye IVA)");

} else if (comprar === "remera") {
    let subtotal = cantidad * remera
    let total = subtotal + calcularIva(subtotal)
    console.log("El total a pagar es: " + total + " (incluye IVA)");

} else {
    alert("Elija solo entre taza y remera, gracias.")

}
