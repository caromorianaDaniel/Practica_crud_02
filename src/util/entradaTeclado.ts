// https://node.js.org/dist./v4.8.3/docs/doc/api/readline.html
import readline from 'readline'
let readlineI: readline.Interface

let leeLinea = (prompt: string) => {
    readlineI = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise<number>( (resuelta: any, rechazada: any) => {
            readlineI.question(`${prompt}: `, (cadenaEntrada: number) => {
                resuelta (cadenaEntrada)
            }
        )
    })
}

export let leerTeclado = async (prompt: string) => {
    let valor: number
    valor = await leeLinea(prompt)
    readlineI.close()
    return valor
}