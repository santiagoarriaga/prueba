const promise = new Promise( (resolve) =>
{
  console.log( 'empecé' )

  setTimeout( resolve, 2000 )
})

// no funciona porque no estamos en una función async
await promise

console.log( 'ya terminó' )
