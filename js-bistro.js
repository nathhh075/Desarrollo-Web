//Menú
///*
const prompt = require("prompt-sync")({ sigint: true });

let menu = [
  { id: 1, nombre: "Hamburguesa Clásica", categoria: "Platos Fuertes", precio: 25500 },
  { id: 2, nombre: "Pizza Margarita", categoria: "Platos Fuertes", precio: 30000 },
  { id: 3, nombre: "Ensalada César", categoria: "Entradas", precio: 15000 },
  { id: 4, nombre: "Sopa de Tomate", categoria: "Entradas", precio: 12000},
  { id: 5, nombre: "Pasta Carbonara", categoria: "Platos Fuertes", precio: 28000 },
  { id: 6, nombre: "Pollito Asado", categoria: "Platos Fuertes", precio: 35000 },
  { id: 7, nombre: "Tacos Mexicanos", categoria: "Platos Fuertes", precio: 22500 },
  { id: 8, nombre: "Sushi Roll", categoria: "Platos Fuertes", precio: 40000 },
  { id: 9, nombre: "Sandwich de Pollo", categoria: "Platos Fuertes", precio: 18000 },
  { id: 10, nombre: "Brownie con Helado", categoria: "Postres", precio: 10500 },
  { id: 11, nombre: "Jugo natural", categoria: "Bebida", precio: 8000 },
  { id: 12, nombre: "Pastel de Chocolate", precio: 10500 },
  { id: 13, nombre: "Cocacola", categoria: "Bebida", precio: 8000 },
  { id: 14, nombre: "Limonada", categoria: "Bebida", precio: 8000 }
];

let totalPedidos = [];
let pedidosCrudos = [];


//Pedir nombre del cliente - hacer esta más corta
function definirCliente() {
    let cliente = prompt("nombre: ");
    if (cliente.trim() === "" || cliente == null) return "Cliente Anonimo"
    else return cliente 
}

//función que se puede hacer una vez 
function elegirPlatos (){ 
       
    let continuarPedido; 
    let platos = [];
    console.log("Menú disponible:");
        for (let i = 0; i < menu.length; i++) {
            console.log(menu[i].id + " - " + menu[i].nombre + " - " + menu[i].precio);
        }

    do {
        let platoId = prompt("Escoge tu plato con el ID que aparece en el menú:");
        platos.push(platoId);

        continuarPedido = prompt("¿Deseas ordenar algo más? (si/no)").trim().toLowerCase();
        if (continuarPedido === "no") return pedidos;
    } while (continuarPedido.trim() === "" || continuarPedido === "si");
}

function crearPedido() {
    let cliente = definirCliente();
    let platosCliente = elegirPlatos();

    pedidosCrudos.push({
        cliente: cliente,
        platos: platosCliente
    });

    totalPedidos.push({
        pedidosCrudos
    })
}

function mostrarOpciones() {
    let opc = prompt("1. Procesamiento de pedidos \n2. Cálculos y Reportes \n3. Salir");
    switch (opc) {
        case '1':
            console.log("Has seleccionado Procesamiento de pedidos");
                crearPedido();
            break;

        case '2':
            console.log("Cálcular las ventas diarias");
            
            break;

        case '3':
            console.log("Saliendo del programa...");
            console.clear;
            break;

        default:
            mostrarOpciones ();
            break;
    }
}
    //*/

let prueba = prompt ("escribe algo aqui")
mostrarOpciones();