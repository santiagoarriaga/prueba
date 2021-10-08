const inicializarBaseDeDatos = () => new Promise( resolve =>
{
  console.log( 'inicializando base de datos' )
  setTimeout( resolve, 2000 )
})

const inicializarServidor = () => new Promise( resolve =>
{
  console.log( 'inicializando servidor' )
  throw Error( 'horror' )
  setTimeout( resolve, 3000 )
})

// código equivalente a promise03.js
const ejecutar = async () =>
{
  try
  {
    await inicializarBaseDeDatos()
    await inicializarServidor()

    console.log( 'todos los sistemas han inicializado' )
  }
  catch( error )
    { console.error( "HUBO UN ERROR", error ) }
}

ejecutar()
