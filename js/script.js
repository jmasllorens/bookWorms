
let mainPrincipal  = document.querySelector(".main-principal")
let mainCatalogo = document.querySelector(".main-catalogo")

function cambiarPantallaCatalogo(){

    if(mainPrincipal.style.display == "block"){
        mainPrincipal.style.display = "none"
        }
    if(mainCatalogo.style.display == "none"){
        mainCatalogo.style.display = "block"
        }

}

function cambiarPantallaPrincipal(){

    if(mainCatalogo.style.display == "block"){
        mainCatalogo.style.display = "none"
        }
    if(mainPrincipal.style.display == "none"){
        mainPrincipal.style.display = "block"
        }

}
