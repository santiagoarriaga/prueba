const inicializarBaseDeDatos = () => new Promise( resolve =>
{
  console.log( 'inicializando base de datos' )
  setTimeout( resolve, 2000 )
})

const inicializarServidor = () => new Promise( resolve =>
{
  console.log( 'inicializando servidor' )
  setTimeout( resolve, 3000 )
})

const ejecutar = async () =>
{
  try
  {
    await Promise.all([ inicializarBaseDeDatos(), inicializarServidor() ])

    console.log( 'todos los sistemas han inicializado' )
  }
  catch( error )
    { console.error( "HUBO UN ERROR", error ) }
}

ejecutar()
