import {leerTeclado} from './util/entradaTeclado'

console.log("Hola Mundo")

let main =  async () => {
    const valor = await leerTeclado('Dime tu edad')
    if (valor < 18){
        console.log(`Tu edad es: ${valor}, eres menor de edad`)
    } else if ( valor >= 18){
        console.log(`Tu edad es: ${valor}, eres mayor de edad`)
    } else {
        console.log("No has añadido un valor válido")
        main()
    }    
}

main();