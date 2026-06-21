let cantidad = 0;

const botones = document.querySelectorAll(".agregar");
const contador = document.getElementById("contador");

botones.forEach(function(boton){

    boton.addEventListener("click", function(){

        // Busca el stock del producto de este botón
        const producto = boton.parentElement;
        const stock = producto.querySelector(".stock span");

        let unidades = parseInt(stock.textContent);

        // Si no hay stock, no hace nada
        if(unidades <= 0){
            return;
        }

        // Disminuye el stock
        unidades--;

        stock.textContent = unidades;

        // Aumenta el carrito
        cantidad++;
        contador.textContent = cantidad;

        // Si se terminó el stock
        if(unidades === 0){

            boton.textContent = "Sin stock";

            boton.disabled = true;

            boton.style.background = "#888";

            boton.style.cursor = "not-allowed";

        }

    });

});