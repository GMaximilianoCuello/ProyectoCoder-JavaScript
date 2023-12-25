//  Cliente

class Cliente {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero.toLowerCase();
    }
}

let cliente1 = new Cliente(prompt("Cual es tu nombre?"), prompt("Eres hombre, mujer u otro?"))

switch (cliente1.genero) {

    case "mujer":
        alert("Bienvenida " + cliente1.nombre + ", como le va?")
        break;

    case "hombre":
        alert("Bienvenido " + cliente1.nombre + ", como le va?")
        break;
    
    case "otro":
        alert("Bienvenidx " + cliente1.nombre + ", como le va?")
        break;

    default:
        alert("Por favor, introducir un genero o escribir 'otro'")
        break;

}

// PRODUCTOS Y SUMA

const productos = [
    { producto: "taza", precio: 3500 },

    { producto: "remera", precio: 5000 }
]

let comprar = prompt("¿Que producto sera: taza o remera?").toLowerCase()

const calcularIva = x => x * 0.21;

if (comprar === "taza" || comprar === "remera") {

    let cantidad = parseInt(prompt(`¿Cúantas ${comprar} querés?`))
    let subtotal = cantidad * productos.find((product) => product.producto === comprar).precio;
    let total = subtotal + calcularIva(subtotal);
    console.log(total + " (Incluye iva)");

} else {
    alert("Por favor, elige entre tazas o remeras")
}
