const prompt = require("prompt-sync")({ sigint: true });

let menu = [
  { id: 1, nombre: "Hamburguesa Clásica", categoria: "Plato Fuerte", precio: 25500 },
  { id: 2, nombre: "Pizza Margarita", categoria: "Plato Fuerte", precio: 30000 },
  { id: 3, nombre: "Ensalada César", categoria: "Entrada", precio: 15000 },
  { id: 4, nombre: "Sopa de Tomate", categoria: "Entrada", precio: 12000},
  { id: 5, nombre: "Pasta Carbonara", categoria: "Plato Fuerte", precio: 28000 },
  { id: 6, nombre: "Pollito Asado", categoria: "Plato Fuerte", precio: 35000 },
  { id: 7, nombre: "Tacos Mexicanos", categoria: "Plato Fuerte", precio: 22500 },
  { id: 8, nombre: "Sushi Roll", categoria: "Plato Fuerte", precio: 40000 },
  { id: 9, nombre: "Sandwich de Pollo", categoria: "Plato Fuerte", precio: 18000 },
  { id: 10, nombre: "Brownie con Helado", categoria: "Postre", precio: 10500 },
  { id: 11, nombre: "Jugo natural", categoria: "Bebida", precio: 8000 },
  { id: 12, nombre: "Pastel de Chocolate", categoria: "Postre", precio: 10500 },
  { id: 13, nombre: "Cocacola", categoria: "Bebida", precio: 8000 },
  { id: 14, nombre: "Limonada", categoria: "Bebida", precio: 8000 }
];

let pedidosCrudos = []; // siempre será un array de objetos con cliente y platos

// Pedir nombre del cliente
function definirCliente() {
    let cliente = prompt("Nombre del cliente: ");
    return (cliente && cliente.trim() !== "") ? cliente : "Cliente Anónimo";
}

// Mostrar menú y dejar elegir platos
function elegirPlatos(){ 
    let platos = [];
    let continuarPedido = "si";

    console.log("\nMenú disponible:");
    menu.forEach(p => console.log(`${p.id} - ${p.nombre} - $${p.precio}`));

    while (continuarPedido === "si") {
        let platoId = parseInt(prompt("\nEscoge tu plato con el ID que aparece en el menú: "));
        let plato = menu.find(p => p.id === platoId);
    
        if (plato) {
            platos.push(plato); 
            console.log(`Agregado: ${plato.nombre} - $${plato.precio}`);
        } else {
            console.log("ID inválido");
        }

        continuarPedido = prompt("¿Deseas ordenar algo más? (si/no): ").trim().toLowerCase(); //toLowerCase() vuelve minuscula todos los caracteres de la cadena
    }

    // Mostrar resumen
    console.log("\nResumen del pedido:");
    platos.forEach(p => console.log(`- ${p.nombre} ($${p.precio})`));
    let total = platos.reduce((acc, p) => acc + p.precio, 0);
    console.log("Total: $" + total + "\n");

    return platos; 
}

// Procesar un pedido y guardarlo en pedidosCrudos
function procesarPedido(){
    let cliente = definirCliente();
    let platos = elegirPlatos();

let bebidas = platos.filter(p => p.categoria.toLowerCase() === "bebida").map(p => p.nombre);
let entradas = platos.filter(p => p.categoria.toLowerCase() === "entrada").map(p => p.nombre);
let fuertes  = platos.filter(p => p.categoria.toLowerCase() === "plato fuerte").map(p => p.nombre);
let postres  = platos.filter(p => p.categoria.toLowerCase() === "postre").map(p => p.nombre);

    let platosModificados = [
        ...bebidas,
        ...entradas,
        ...fuertes,
        ...postres,
      //los puntos suspensivos son porque no sabemos cuantos elemenos tipo bebidas hay
    ];

    let pedido = {platosModificados, cliente };
    pedidosCrudos.push(pedido); //  ahora sí se guarda bien el pedido porfinnnnn

    console.log("\n Pedido registra3do con éxito!");
}

// Mostrar menú de opciones
function mostrarOpciones() {
    let opc;
    do {
        opc = prompt("\n\n1. Procesamiento de pedidos \n2. Ver pedidos guardados \n3. Salir\n> ");

        switch (opc) {
            case '1':
                console.log("\nCreando un nuevo pedido.... \n");
                procesarPedido();
                break;

            case '2':
                console.log("\nVer todos los Pedidos registrados:");
                console.log(JSON.stringify(pedidosCrudos, null, 2)); // aqui es para mostrar bonito
                break;

            case '3':
                console.log("Saliendo del programa...");
                console.clear;
                break;

            default:
                console.log("Opción inválida, intenta de nuevo.");
        }
    } while (opc !== '3');
}

// Inicio
mostrarOpciones();
