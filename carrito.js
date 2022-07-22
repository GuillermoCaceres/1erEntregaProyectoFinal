class Prod {
    constructor(id, prod, precio, stock) {
        this.id = id;
        this.prod = prod;
        this.precio = precio;
        this.stock = stock;
    }
}
const productos = [];
productos.push(new Prod(1, "Ambo1" , 3799, 3));
productos.push(new Prod(2, "Ambo2" , 4499, 5));
productos.push(new Prod(3, "Ambo3" , 3499, 9));
productos.push(new Prod(4, "Ambo4" , 3899, 12));
productos.push(new Prod(5, "Ambo5" , 3899, 4));
productos.push(new Prod(6, "Ambo6" , 5499, 8));
productos.push(new Prod(7, "Ambo7" , 5499, 6));
productos.push(new Prod(8, "Ambo8" , 3499, 7));
console.log(productos);

function elemento(producto, id)
    {
        return productos.find(objeto => objeto.id === id);
    }
let opcion = prompt("SELECCIONE 1 PARA ELEGIR COMPRAR ")
    while (opcion != 'ESC') 
        {
            switch (opcion) 
                {
                    case "1":
                        let user = elemento(productos, parseInt(prompt('INGRESE ID DE AMBO')))
                        if(user != undefined)    
                        {
                            if(user.stock > 0) {
                                prod = user.prod
                                precio = user.precio
                                stock = user.stock - 1
                                user.stock = stock
                            }
                            else{
                                alert("no hay stock")
                            }    
                        }
                        else
                            {
                                opcion = elemento(productos,prompt('INGRESE ID NUEVAMENTE'));
                            }
                        break;
                    default:
                        opcion=prompt("INGRESE 1 PARA ELEGIR NUEVAMENTE");
                        break;
                }
                console.log("producto seleccionado " + prod)
                console.log("precio del producto: $"+precio)
                console.log("stock disponible "+stock)
        }  
