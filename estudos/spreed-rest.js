// SPREAD/REST -> podemos pegar todo elemento de uma determinada funcao/variavel de uma so vez, e deixar o codigo mais pratico -> ...

let trabalhadores = [ "thiago", "juarez", "paola"]
let bebida = ["whisky", "vodka"]

const elementos = [...trabalhadores] // obtem todos elementos de trabal...
const elementos1 = ["agua", "coca", ...bebida]
console.log(elementos, elementos1)