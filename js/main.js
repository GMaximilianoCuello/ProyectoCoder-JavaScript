//

// ------ ID productos

const productos = [
    // futbol
    {
        id: "afa-21",
        titulo: "Adidas Argentina",
        imagen: "./img/Adidas Afa 21.jpg",
        categoria: {
            nombre: "Fútbol",
            id: "fútbol"
        },
        precio: 25000
    },
    {
        id: "telstar",
        titulo: "Adidas Telstar",
        imagen: "./img/Adidas Telstar.jpg",
        categoria: {
            nombre: "Fútbol",
            id: "fútbol"
        },
        precio: 40000
    },
    {
        id: "tango",
        titulo: "Adidas Tango",
        imagen: "./img/Adidas Tango.jpg",
        categoria: {
            nombre: "Fútbol",
            id: "fútbol"
        },
        precio: 30000
    },
    {
        id: "finale",
        titulo: "Adidas Finale TRN",
        imagen: "./img/adidas Finale TRN.jpg",
        categoria: {
            nombre: "Fútbol",
            id: "fútbol"
        },
        precio: 62000
    },
    // Voley
    {
        id: "mva200",
        titulo: "Mikasa Mva 200",
        imagen: "./img/Mva 200.jpg",
        categoria: {
            nombre: "Vóley",
            id: "vóley"
        },
        precio: 30000
    },
    {
        id: "mva330",
        titulo: "Mikasa Mva 330",
        imagen: "./img/Voley mikasa MVA-330.jpg",
        categoria: {
            nombre: "Vóley",
            id: "vóley"
        },
        precio: 70000
    },
    {
        id: "v330w",
        titulo: "Mikasa V330w",
        imagen: "./img/V330w.jpg",
        categoria: {
            nombre: "Vóley",
            id: "vóley"
        },
        precio: 20000
    },
    {
        id: "v390w",
        titulo: "Mikasa V390w",
        imagen: "./img/V390w.jpg",
        categoria: {
            nombre: "Vóley",
            id: "vóley"
        },
        precio: 50000
    },
    // Basquet
    {
        id: "molten-4500",
        titulo: "Molten BG4500",
        imagen: "./img/Molten 4500.jpg",
        categoria: {
            nombre: "Básquet",
            id: "básquet"
        },
        precio: 42000
    },
    {
        id: "molten-gg7x",
        titulo: "Molten GG7X",
        imagen: "./img/Molten GG7X.jpg",
        categoria: {
            nombre: "Básquet",
            id: "básquet"
        },
        precio: 110000
    },
    {
        id: "nba-street",
        titulo: "Spalding NBA Street",
        imagen: "./img/Spalding NBA street.jpg",
        categoria: {
            nombre: "Básquet",
            id: "básquet"
        },
        precio: 75000
    },
    {
        id: "tf-1000",
        titulo: "Spalding TF-1000 Legacy",
        imagen: "./img/Spalding TF1000 Legacy.jpg",
        categoria: {
            nombre: "Básquet",
            id: "básquet"
        },
        precio: 50000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-contenido");
const tituloPrincipal = document.querySelector("#titulo-categoria");
let botonesAgregar = document.querySelectorAll(".agregar")
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-info">
                <h3 class="producto-nombre">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="agregar" id="${producto.id}">Agregar a carrito</button>
            </div>
        `;
        contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();
    
};

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos)
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })

}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito()
}else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {

    const idAgregar = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idAgregar)

    if(productosEnCarrito.some(producto => producto.id === idAgregar)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idAgregar)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito()
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
    
}