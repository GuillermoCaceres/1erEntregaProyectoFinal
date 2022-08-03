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
/* productos.push(new Prod(5, "Ambo5" , 3899, 4));
productos.push(new Prod(6, "Ambo6" , 5499, 8));
productos.push(new Prod(7, "Ambo7" , 5499, 6));
productos.push(new Prod(8, "Ambo8" , 3499, 7)); */
/* console.log(productos);

function elemento(producto, id)
    {
        return productos.find(objeto => objeto.id === id);
    }
                        
         */

/*
let titulo = document.getElementById("titulo");
titulo.innerHTML = prompt("ingrese titulo nuevo")
*/
/* /*llamar a un elemento por clase
const cabecera1 = document.getElementsByClassName("cabecera1")
console.log(cabecera1)
llamar un elemento por queryselector
* para class
# para id

const prueba = document.querySelector(".conteiner1")
console.log(prueba) 
*/
let boton
let total = 0
boton = document.getElementById("Boton1")
boton.onclick = () => 
    {
        if (productos[0].stock > 0) 
        {
            total = total + productos[0].precio
            console.log("el total es $"+ total)
            productos[0].stock = productos[0].stock - 1
            console.log(productos[0])
        }
        else 
        {
            let sinStock = document.getElementById("Boton1");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }
boton = document.getElementById("Boton2")
boton.onclick = () => 
    {   
        if (productos[1].stock > 0) 
        {
            total = total + productos[1].precio
            console.log("el total es $"+ total)
            productos[1].stock = productos[1].stock - 1
            console.log(productos[1])
        }
        else 
        {
            let sinStock = document.getElementById("Boton2");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }
boton = document.getElementById("Boton3")
boton.onclick = () => 
    {
        if (productos[2].stock > 0) 
        {
            total = total + productos[2].precio
            console.log("el total es $"+ total)
            productos[2].stock = productos[2].stock - 1
            console.log(productos[2])}
        else 
        {
            let sinStock = document.getElementById("Boton3");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }
boton = document.getElementById("Boton4")
boton.onclick = () => 
    {   
        if (productos[3].stock > 0) 
        {
            total = total + productos[3].precio
            console.log("el total es $"+ total)
            productos[3].stock = productos[3].stock - 1
            console.log(productos[3])
        }
        else 
        {
            let sinStock = document.getElementById("Boton4");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }