console.log("Trabajo de Ethan Godoy");

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

//ingreso del usuario
let Ingresar = (prompt("Ingresa tu nombre"))
console.log("Bienvenido " + Ingresar)

//Lista de productos
let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "carts"
    content.innerHTML = `
        <div class="img-price">
            <img src="${product.img}">
            <p><span>${product.precio}</span>$</p>
        </div>
        <p class="title">${product.nombre}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")

    comprar.innerText = "Añadir al carrito"
    comprar.className = "btn-add-cart"

    //aviso
    comprar.addEventListener('click', aviso)

    function aviso(){
        Swal.fire(
            'Añadido al Carro!',
            'Se añadio al carrito correctamente!',
            'success'
          )
    }

    content.append(comprar)

    comprar.addEventListener("click", () =>{
        const repeat =carrito.some((repeatProduct) => repeatProduct.id === product.id)

        if (repeat){
            carrito.map((prod) => {
                if (prod.id === product.id){
                    prod.cantidad++
                }
            })
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            })
        }
        console.log(carrito)
    })
})

//STORAGE
localStorage.setItem("Usuario", Ingresar)



