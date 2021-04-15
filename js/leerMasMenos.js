let mainMas  = document.querySelector(".mas")
let mainPuntos  = document.querySelector(".puntos")
let mainLeerMas  = document.querySelector(".leer-mas")
let mainLeerMenos  = document.querySelector(".leer-menos")


function leerMas () {
    if(mainMas.style.display == "none") {
        mainMas.style.display = "inline"
    }
    if(mainPuntos.style.display == "inline") {
        mainPuntos.style.display = "none"
    }
    if(mainLeerMas.style.display == "block") {
        mainLeerMas.style.display = "none"
    }
    if(mainLeerMenos.style.display == "none") {
        mainLeerMenos.style.display = "block"
    }
}

function leerMenos () {
    if(mainMas.style.display == "inline") {
        mainMas.style.display = "none"
    }
    if(mainPuntos.style.display == "none") {
        mainPuntos.style.display = "inline"
    }
    if(mainLeerMas.style.display == "none") {
        mainLeerMas.style.display = "block"
    }
    if(mainLeerMenos.style.display == "block") {
        mainLeerMenos.style.display = "none"
    }
}