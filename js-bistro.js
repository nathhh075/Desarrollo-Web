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

            // Switch para mensaje según la categoría
            switch (plato.categoria.toLowerCase()) {
                case "bebida":
                    console.log("  Perfecto para refrescar tu comida.");
                    break;
                case "entrada":
                    console.log("  Ideal para empezar tu pedido.");
                    break;
                case "plato fuerte":
                    console.log("  ¡Disfruta de un plato principal delicioso!");
                    break;
                case "postre":
                    console.log("  El toque dulce perfecto para cerrar tu comida.");
                    break;
            }

        } else {
            console.log("ID inválido");
        }

        continuarPedido = prompt("¿Deseas ordenar algo más? (si/no): ").trim().toLowerCase();
    }
    return platos; 
}



function procesarPedido(){
    let cliente = definirCliente();
    let platos = elegirPlatos();

    let bebidas = platos.filter(p => p.categoria.toLowerCase() === "bebida");
    let entradas = platos.filter(p => p.categoria.toLowerCase() === "entrada");
    let fuertes  = platos.filter(p => p.categoria.toLowerCase() === "plato fuerte");
    let postres  = platos.filter(p => p.categoria.toLowerCase() === "postre");

    let platosOrdenados = [...bebidas, ...entradas, ...fuertes, ...postres];
    let platosModificados = platosOrdenados.map(p => p.nombre);
    let total = platosOrdenados.reduce((acc, p) => acc + p.precio, 0);

    let pedido = {platosModificados, cliente, total };
    pedidosCrudos.push(pedido);

    console.log("\nResumen del pedido:");
    platosOrdenados.forEach(p => console.log(`- ${p.nombre} ($${p.precio})`));
    
    console.log("Total: $" + total + "\n");

    aplicarPromocion(pedido);
    console.log("\n Pedido registrado con éxito!");
    
    
}


function aplicarPromocion(pedido) {
    let tienePlatoNoBebida = pedido.platosModificados.some(plato => {
        let item = menu.find(m => m.nombre === plato);
        return item && item.categoria.toLowerCase() !== "bebida";
    });

    if (pedido.total >= 40000 && tienePlatoNoBebida) console.log(`Promoción aplicada para ${pedido.cliente}: ¡Postre gratis!`);
    
}

//Esta función calcula el total del pedido, uno a uno
function calcularTotalCuenta() {
    let categoriaMonto;
    if (pedidosCrudos.length === 0) {
        console.log("No hay pedidos registrados todavía.");
        return;
    }
   

    pedidosCrudos.forEach((p, i) => {
        console.log(`\nPedido #${i+1}`);
        console.log(`   Platos: `);
        p.platosModificados.forEach(plato => console.log(`- ${plato}`));
        console.log(`   Cliente: ${p.cliente}`);
        console.log(`   Total: $${p.total}`);
        //Para mostrar si es un precio alto-bajo-medio
        if (p.total < 30000) {
            categoriaMonto = "Bajo";
        } else if (p.total >= 30000 && p.total <= 80000) {
            categoriaMonto = "Medio";
        } else {
            categoriaMonto = "Alto";
        }
        console.log(`Clasificación del pedido: ${categoriaMonto}`);
    });

    console.log("---------------------------------------")

    let ingresoDiario = pedidosCrudos.reduce((acc, p) => acc + p.total, 0);
    console.log(`\nTotal de ventas del día: $${ingresoDiario}`);

}


 function formatearListas(){
         p.platosModificados.forEach(pl => {
            console.log(`     - ${pl}`);
        });

        console.log("No hay pedidos registrados.");  
}

// Mostrar menú de opciones
function mostrarOpciones() {
    let opc;
    do {
        opc = prompt("\n\n1. Creación de pedidos \n2. Calculos \n3. Formatear listas de pedidos \n4. Salir\n> ");

        switch (opc) {
            case '1':
                console.log("\nCreando un nuevo pedido.... \n");
                procesarPedido();
                break;

            case '2':
                console.log("\n Calculando totales....");
                calcularTotalCuenta();
                break;

            case '3':
                formatearListas();
                break;
                
            case '4':
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opción inválida, intenta de nuevo.");
        }
    } while (opc !== '4');
}

// Inicio
mostrarOpciones();
