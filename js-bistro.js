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
    return platos; 
}

// Procesar un pedido y guardarlo en pedidosCrudos
function procesarPedido(){
    let cliente = definirCliente();
    let platos = elegirPlatos();

    // Ordenamos los platos por categoría
    let bebidas = platos.filter(p => p.categoria.toLowerCase() === "bebida");
    let entradas = platos.filter(p => p.categoria.toLowerCase() === "entrada");
    let fuertes  = platos.filter(p => p.categoria.toLowerCase() === "plato fuerte");
    let postres  = platos.filter(p => p.categoria.toLowerCase() === "postre");

    // Guardamos los platos en orden, pero con su objeto completo
    let platosOrdenados = [
        ...bebidas,
        ...entradas,
        ...fuertes,
        ...postres,
    ];

    let platosModificados = platosOrdenados.map(p => p.nombre);
    let pedido = { platosModificados, cliente };
    pedidosCrudos.push(pedido);

    // Mostrar resumen en orden
    console.log("\nResumen del pedido:");
    platosOrdenados.forEach(p => console.log(`- ${p.nombre} ($${p.precio})`));
    let total = platosOrdenados.reduce((acc, p) => acc + p.precio, 0);
    console.log("Total: $" + total + "\n");

    console.log("\n Pedido registrado con éxito!");
}


//Esta función calcula el total del pedido, uno a uno
function calcularTotalCuenta() {
    if (pedidosCrudos.length === 0) {
        console.log("No hay pedidos registrados todavía.");
        return;
    }

    pedidosCrudos.forEach((p, i) => {
        let total = 0;

        // Bucle para recorrer cada plato del pedido
        for (let plato of p.platos) {
            // Buscar el plato en el menú
            let itemMenu = menu.find(m => m.nombre === plato.nombre);
            if (itemMenu) {
                total += itemMenu.precio;
            }
        }

        // Mostrar pedido con total
        console.log(`\ Pedido #${i+1}`);
        console.log(`   Cliente: ${p.cliente}`);
        console.log("   Platos:");
        p.platos.forEach(pl => console.log(`     - ${pl.nombre}`));
        console.log(`     Total: $${total}`);
    });
}

// Mostrar menú de opciones
function mostrarOpciones() {
    let opc1;
    let opc;
    do {
        opc = prompt("\n\n1. Creación de pedidos \n2. Calculos \n3. Reportes \n4. Salir\n> ");

        switch (opc) {
            case '1':
                console.log("\nCreando un nuevo pedido.... \n");
                procesarPedido();
                break;

            case '2':
                opc1 = prompt("\n1. Calcular el total de todos los pedidos uno a uno \n2. Calcular el total del día \n>");
                switch (opc1){
                    //Este case era para ver los pedidos totales pero no calcula el precio de estos
                    /*case '1': 
                        console.log("\n Lista de Pedidos:");
                        pedidosCrudos.forEach((p, i) => {
                            console.log(`\nPedido #${i+1}:`);
                            p.platosModificados.forEach(pl => {console.log(`   - ${pl}`);});
                            console.log(`   Cliente: ${p.cliente}`);
                        }); // aqui es para mostrar bonito
                        break;
                     */   
                    case '1':
                        console.log("\n Calculando totales....");
                        calcularTotalCuenta();
                        break;

                    case '2':
                        break;
                }
                break;

            case '3':
                opc1 = prompt("\n1. Ver todos los Pedidos \n2. Calcular el total de todos los pedidos uno a uno \n3. Calcular el total del día \n>");
                switch (opc1){
                    case '1':
                        console.log("Saliendo del programa...");
                        console.clear;
                        break;
                    }
                    break;
                
            case '4':
                console.log("Saliendo del programa...");
                console.clear;
                break;

            default:
                console.log("Opción inválida, intenta de nuevo.");
        }
    } while (opc !== '4');
}

// Inicio
mostrarOpciones();
