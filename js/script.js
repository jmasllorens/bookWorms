
let mainPrincipal  = document.querySelector(".main-principal")
let mainCatalogo = document.querySelector(".main-catalogo")
let mainDescripcion = document.querySelector(".main-descripcion-libro")

function cambiarPantallaCatalogo(){

    if(mainPrincipal.style.display == "block"){
        mainPrincipal.style.display = "none"
        }
    if(mainCatalogo.style.display == "none"){
        mainCatalogo.style.display = "block"
        }
    if(mainDescripcion.style.display == "block"){
        mainDescripcion.style.display = "none"
        }
    

}

function cambiarPantallaPrincipal(){

    if(mainCatalogo.style.display == "block"){
        mainCatalogo.style.display = "none"
        }
    if(mainPrincipal.style.display == "none"){
        mainPrincipal.style.display = "block"
        }
    if(mainDescripcion.style.display == "block"){
        mainDescripcion.style.display = "none"
        }

}

function cambiarPantallaDescripcion(){

    if(mainCatalogo.style.display == "block"){
        mainCatalogo.style.display = "none"
        }
    if(mainDescripcion.style.display == "none"){
        mainDescripcion.style.display = "block"
        }
    

}
