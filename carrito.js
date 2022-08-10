const productos = [ 
    {id: 1, prod:"Ambo1", precio: 3799, stock:3},
    {id: 2, prod:"Ambo2", precio: 4499, stock:5},
    {id: 3, prod:"Ambo3", precio: 3499, stock:9},
    {id: 4, prod:"Ambo4", precio: 3899, stock:12}
];
const guardarLocal = (clave,valor) => { localStorage.setItem(clave,valor)};
//almacenar
for (const producto of productos) {
    guardarLocal("listaProductos",JSON.stringify(productos))
}
let carrito = []
let carritoEnLS = JSON.stringify(localStorage.getItem('carrito'))
if (carritoEnLS) {
    carrito = carritoEnLS
}
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
            guardarLocal("listaProductos",JSON.stringify(productos[0]))
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
            guardarLocal("listaProductos",JSON.stringify(productos[1]))
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
            console.log(productos[2])
            guardarLocal("listaProductos",JSON.stringify(productos[2]))
        }
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
            guardarLocal("listaProductos",JSON.stringify(productos[3]))
        }
        else 
        {
            let sinStock = document.getElementById("Boton4");
            sinStock.innerHTML = "Sin Stock"
            alert("no hay stock")
        }
    }