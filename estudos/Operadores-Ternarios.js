let idade = 20;

//OPERADORES TERNARIOS 
// sintaxe padrao -> let = condicional ? "v1" : "v2";
// consocional -> condicao para sertextuada
// ? -> entao -> se for true entao atribui v1;
// : -> se nao -> sendo falsa atribui v2;

 let podeDirigir =(idade >= 18) ? true : false;
     console.log(podeDirigir);

// RETORNANDO UMA STRING
let testeCovid = false;
let resultado = (testeCovid === false/*true*/) ? "positivo" : "negativo";
console.log(`O resultado do teste é ${resultado}`);

// PASSANDO MAIS DE UMA CONDICAO 
//-> podemos usar && para separar caso de mais condicoes 
const pedido = "entrega";
const pagamento = "pendente";

const situacao = (pedido == "entrega" && pagamento == "pendente")
? "situação pendente" 
: "situação liberado";
console.log (situacao);
