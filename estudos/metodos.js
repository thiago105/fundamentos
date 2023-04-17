// .SLICE usado para pegar somente uma parte do array ou string, podendo passar apartir de qual elementos queremos (2)
frutas = [ "banana", "jaca", "maca",  "abacaxi"];
resultado = frutas.slice(1);
console.log(resultado)

// .SPLICE
// altera conteudo de uma lista, adicionando novos elementos e remove elementos antigos, podendo receber args na funcao 
frutas1 = [ "banana", "jaca", "maca",  "abacaxi", "uva"];
const removeEAdiciona = frutas1.splice(2, 1, "pera")
console.log(frutas1, removeEAdiciona)

// .SORT 
/*organiza o codigo de forma crescente ou decrescente dentro de um array*/
const pessoas = [
    {
        nome: 'thiago',
        idade: 22,
    },
    {
     nome: 'juarez',
     idade: 30
    },
    {
        nome: 'paola',
        idade: 35
    }
]
pessoas.sort(function(a, b){
    if(a.nome < b.nome){
        return -1
    } else {
        return true
    }
});
console.log(pessoas);

// .INCLUDES 
/*faz uma verificacao dentro do array, verificando se tem ou nao */
const numeros = [10, 2, 40, 50, 80];
console.log(numeros.includes(80));

// .INDEXOF 
/*acessa a posicao de cada elemento */
const numbers = [10, 2, 40, 50, 80];
console.log(numbers.indexOf(50));

// .CONCAT
/*uni os valores/array e retorna um novo array  contendo todos os valores passados*/
const a = [10, 2, 40];
const b = [50, 80];
const unir = a.concat(b);
console.log(unir);

// .FILTER 
// filtra elementos passados e criando um novo array com todos elementos pedido
const filtrando = [10, 2, 40, 50, 80];
const novoArray = filtrando.filter(filtrar)
function filtrar(valor){
    return valor < 20
}
console.log(novoArray)

// .FIND
//pega o primeiro valor do elemento e passa para uma funcao
const primeiroElemento = [10, 2, 40, 50, 80];
const passarElementos = primeiroElemento.find(maior)
function maior(valor){
    return valor > 70
}
console.log(passarElementos)

// .FOREACH
// execulta uma funcao para todos elementos do array
const funcao = [10, 2, 40, 50, 80];
numbers.forEach(execulta)
function execulta(valor, index){
    console.log(`posicao: ${index} valor: ${valor}`)
}

// .MAP
// dobra o valor do array, caso numeros, modifica caso string. retornando um novo array
const mult = [10, 2, 40, 50, 80];
const funcaomap = mult.map(dobrar)
function dobrar(element){
    return element * 2
} 
console.log('ORIGINAL', mult)
console.log('NOVO', funcaomap)

// .POP
// remove o ultimo elemento e retorna qual foi o elemento removido
const remove = [10, 2, 40, 50, 80];
const metodoPop = remove.pop()

console.log(remove);
console.log(metodoPop)

// .SHIFT
// remove o primeiro elemento do array e retorna qual foi elemento removido
const remove1 = [10, 2, 40, 50, 80];
const metodoShift = remove1.shift()

console.log(remove1);
console.log(metodoShift)

// .UNSHIFT
// adiciona um ou mais elementos no inicio de um arrey e retorna
const adiciona = [40, 50, 80];
const metodoUn = adiciona.unshift(10, 20, 100);

console.log(adiciona)
console.log(metodoUn)

// .PUSH
//adiciona um ou mais elementos no final de um array, retornado o comprimento
const adiciona1 = [10, 20, 40];
const metodoPush = adiciona1.push(50, 80);

console.log(adiciona1)
console.log(metodoPush)

// .REDUCE
// execulta uma callback para cada elemento e execulta um unico valor;
const  exec = [10, 20, 40];
const total = exec.reduce(metodoRecuce, 10);
function metodoRecuce(valor, acc){
    return acc + valor
}
console.log(total)

//.SPLIT
// separa elementos/string
const separa = 'thiagosantos'
const metodoSplit = separa.split('    ')
console.log(metodoSplit)




