const nombre = "Santiago"
const apellido = "Arriaga"
const pais = "Mexico"

const cadena = nombre + "-" + apellido + "-" + pais
const cadena2 = `${ nombre } - ${ apellido } - ${ pais }`
const cadena3 = `${ 1 + 1 } - ${ Math.abs( -1 ) }`

console.log( cadena )
console.log( cadena2 )
console.log( cadena3 )
