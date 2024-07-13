import './style.css'
import { listaPrecios } from "./precios.js";

const verFecha = document.querySelector('#fecha')
const btnCalcular = document.querySelector('#calcular')
const btnBorrar = document.querySelector('#borrar')
const verMonto = document.querySelector('#monto')
const verReserva = document.querySelector('#monto-reserva')

function main() {
  const nroPersonas = document.querySelector('#nro_personas')
  const ciudadOrigen = document.querySelector('#origen')
  const ciudadDestino = document.querySelector('#destino')

  let vuelo = ''
  let precioVuelo = 0
  let montoReserva = 0

  btnCalcular.addEventListener('click', () => {
    //console.log(nroPersonas.value)
    //console.log(ciudadOrigen.value)
    //console.log(ciudadDestino.value)

    if (nroPersonas.value && ciudadOrigen.value && ciudadDestino.value) {
      vuelo = ciudadOrigen.value + '-' + ciudadDestino.value
      //console.log(listaPrecios[vuelo])
      precioVuelo = listaPrecios[vuelo]
  
      manejoVerReserva()
  
      montoReserva = calcularReserva(nroPersonas.value, precioVuelo)
      verMonto.innerHTML = montoReserva.toFixed(2)
    } else {
      alert('Son obligatorios los datos...')
    }
  })

  btnBorrar.addEventListener('click', () => {
    if (nroPersonas.value && ciudadOrigen.value && ciudadDestino.value) {
      nroPersonas.value = ''
      ciudadOrigen.value = ''
      ciudadDestino.value = ''
  
      manejoVerReserva()
    }
  })

  manejoFecha()
}

function manejoFecha() {
  const ahora = new Date()
  verFecha.innerHTML = ahora.toLocaleDateString()
}

function calcularReserva(nroPersonas, precioVuelo) {
  let monto = 0
  return monto = nroPersonas * precioVuelo
}

function manejoVerReserva() {
  verReserva.classList.toggle('ocultar')
  verReserva.classList.toggle('ver')
}

document.addEventListener('DOMContentLoaded', main)