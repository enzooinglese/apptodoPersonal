const fecha = document.querySelector("#fecha")
const lista = document.querySelector("#lista")
const input = document.querySelector("#input")
const botonEnter = document.querySelector("#boton-enter")
const check = "fa-check-circle"
const uncheck = "fa-circle"
const lineThrough = 'line-through'
const nombre = document.querySelector("#nombre")

let id

let LIST






// creacion de fecha

const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-AR', {weekday: 'long', month: 'long', day: 'numeric'})


//funcion agregar tarea

function agregarTarea(tarea,id,realizado,eliminado){

    if(eliminado){return}

    const REALIZADO = realizado ? check : uncheck
    const LINE = realizado ? lineThrough : ""

    const element = `   <li id="elemento">
                            <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                            <p class="text ${LINE}">${tarea}</p>
                            <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                        </li>
                    `
    lista.insertAdjacentHTML("beforeend", element)
}

//funcion de tarea realizada

function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ? false : true
}

//funcion de tarea eliminada

function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true

}

// evento para escuchar el click y el enter

botonEnter.addEventListener("click",()=> {
    const tarea = input.value
    if(tarea){
        agregarTarea(tarea,id,false,false)
        LIST.push({
            name: tarea,
            id: id,
            realizado: false,
            eliminado: false,
        })
    }
    localStorage.setItem("TODO", JSON.stringify(LIST))
    input.value = ""
    id ++
})

document.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        const tarea = input.value
        if(tarea){
            agregarTarea(tarea,id,false,false)
            LIST.push({ 
                name: tarea,
                id: id,
                realizado: false,
                eliminado: false,
            })
        }
        localStorage.setItem("TODO", JSON.stringify(LIST))
        input.value = ""
        id ++
    }
}
)

lista.addEventListener("click", function(event){
    const element = event.target
    const elementData = element.attributes.data.value
    //console.log(elementData)

    if(elementData == 'realizado'){
        tareaRealizada(element)
    }
    else if(elementData === "eliminado"){
        tareaEliminada(element)
    }
    localStorage.setItem("TODO", JSON.stringify(LIST))
})

//localstorage get item

let data = localStorage.getItem("TODO")

if(data){
    LIST = JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
} else{
    LIST = []
    id = 0
}

function cargarLista(DATA){
    DATA.forEach(function(i){
        agregarTarea(i.name, i.id, i.realizado, i.eliminado)
    })
}

const $section = document.querySelector('section')


// eliminar section y activar audio con un click

$section.addEventListener('submit', () => {

    // crear nombre






    /* let nombrePersona = prompt("Ingresa tu nombre") */
    let nombrePersona = document.getElementById("nombre1").value
    
    const elementNombre =   `
                            <h1>Hola ${nombrePersona}</h1>
                            `
    nombre.insertAdjacentHTML("beforeend", elementNombre)
 


    $section.remove()
    /* const audio = new window.Audio('./espera.mp3')
    audio.volume = 0.5
    audio.play() */
})

