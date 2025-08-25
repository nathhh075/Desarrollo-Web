Sistema de Pedidos de un Restaurante

Este proyecto es una aplicación en JavaScript (Node.js) que permite registrar pedidos de clientes en un restaurante, calcular el total de cada pedido incluyendo el IVA, y obtener el total del día.

Funcionalidades principales
  
      - Mostrar menú: El programa muestra los platos disponibles con su respectivo precio.
      - Registrar pedidos: Se seleccionan platos por ID.
      - Se guarda el nombre del cliente (en mayúsculas).
      - Se calcula el total del pedido.
      - Calcular IVA
      - Cada pedido incluye un cálculo del IVA (19%).
      - Se almacena y muestra el total con IVA.

Totales del día

Se suman los pedidos realizados.

Se muestra el total con IVA de todos los pedidos.

Funciones implementadas

Declaración: calcularIVA(pedido) → calcula el IVA y el total con IVA de cada pedido.

Expresión: formatearMoneda(valor) → formatea los precios en pesos colombianos (COP).

Flecha: convertirMayusculas(texto) → convierte el nombre del cliente a mayúsculas.

 Archivos principales

index.js → Código principal con el flujo del sistema de pedidos.

README.md → Documentación del proyecto.

 Ejecución

Instalar dependencias necesarias:

npm install prompt-sync


Ejecutar el programa:

node index.js
