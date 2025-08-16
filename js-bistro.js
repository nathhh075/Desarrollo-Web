//Menú
///*
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

let pedidos = [];


//Primero haré para ordenar un pedido

const pedidosCrudos = [
    cliente = definirCliente(),
    platos [pedidos.lenght] = function(){
        for (let i = 0; i<pedidos.length; i++){
            pedidos[i]
        }
    }       
    
];


//Pedir nombre del cliente - hacer esta más corta
function definirCliente() {
    let cliente = prompt("nombre: ");
    if (cliente.trim() === "" || cliente == null) return "Cliente Anonimo"
    else return cliente 
}

//función que se puede hacer una vez 
function elegirPlatos (){
    for (let i = 0; i<menu.length; i++){
        console.log(menu[i] + "\n ")
    }
    let pedidos = [];
    let continuarPedido; 

    do {
        let platoId = prompt("Escoge tu plato con el ID que aparece en el menú:");
        pedidos.push(platoId);

        continuarPedido = prompt("¿Deseas ordenar algo más? (si/no)").trim().toLowerCase();
        if (continuarPedido === "no") return pedidos;
    } while (continuarPedido.trim() === "" || continuarPedido === "si");
}

function mostrarOpciones() {
    let opc = prompt("1. Procesamiento de pedidos \n2. Cálculos y Reportes \n3. Salir");
    switch (opc) {
        case '1':
            console.log("Has seleccionado Procesamiento de pedidos");
            // Aquí el código de procesamiento
            break;

        case '2':
            console.log("1. ");
            // Aquí el código de reportes
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

//comentario 