console.log("probando")


// por que JS es un lenguaje SINCRONO

let variable = "patata"

console.log(variable) // patata

function algo() {
  variable = "banana"
}
algo()

console.log(variable) // banana

// window.setTimeout(() => {
//   variable = "tomate"
//   console.log("despues de 2 segundo", variable) // tomate
// }, 2000) // en milisegundos


console.log(variable) // tomate??? no, patata

// en JS podemos generar/replicar procesos asincronos

// setTimeout => ejecuta una funcion pasado cierto tiempo
// setInterval



window.setTimeout(() => {
  console.log("3. pasó un segundo")
}, 1000)


window.setTimeout(() => {
  console.log("2. pasaron 0 segundos")
}, 0)


console.log("1. operacion sincrona")

// JS proceso primero TODO lo que sincrono
// luego procesa TODO lo asincrono dependiendo del tiempo que tarden



// setInterval


// tres formas de ejecutar un intervalo y controlar cuando se detiene

// 1. a traves de un setTimeout
// let intervalId = window.setInterval(() => {
//   console.log("ejecutando el intervalo")
// }, 1000) // siempre genera un id para poder limpiar el intervalo


// window.setTimeout(() => {
//   window.clearInterval( intervalId )
// }, 5000)


// 2. controlar el flujo a traves de una variable control

// let control = 0;

// let intervalId = window.setInterval(() => {
//   control++
//   console.log("ejecutando el intervalo", control)

//   if (control >= 8) {
//     window.clearInterval( intervalId )
//   }

// }, 1000) // siempre genera un id para poder limpiar el intervalo


// 3. manipulación de DOM
let intervalId;
// let isIntervalRunning; // true o false

// intervalId = window.setInterval(() => {
//   document.querySelector("#contador").innerText++
//   console.log("ejecutando el intervalo")
//   // isIntervalRunning = true
// }, 100) 

document.querySelector("#btn-stop").addEventListener("click", () => {
  window.clearInterval( intervalId )
  // isIntervalRunning = false
})

document.querySelector("#btn-activate").addEventListener("click", () => {
  // document.querySelector("#contador").innerText = 0
  intervalId = window.setInterval(() => {
    document.querySelector("#contador").innerText++
    console.log("ejecutando el intervalo")
  }, 100) 
})




// Animaciones del DOM

let containerNode = document.querySelector("#container")
let cuboNode = document.querySelector("#cubo")

containerNode.style.height = "200px"
containerNode.style.width = "1500px"
containerNode.style.backgroundColor = "darkgray"
containerNode.style.position = "relative"

cuboNode.style.height = "30px"
cuboNode.style.width = "30px"
cuboNode.style.backgroundColor = "black"
cuboNode.style.position = "absolute"
let cubeY = 40;
cuboNode.style.top = `${cubeY}px`

let cubeX = 40; // la posición en el eje X de la caja
cuboNode.style.left = `${cubeX}px`

setInterval(() => {
  // console.log("intentando mover el cubo")

  // 1.declarar que el cubo ha cambiado su posición
  cubeX += 5
  cubeY++
  console.log(cubeX)

  // 2.modificar el estilo del cubo que altera su posición en el DOM
  cuboNode.style.left = `${cubeX}px`
  cuboNode.style.top = `${cubeY}px`

}, 100)


