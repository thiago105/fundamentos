//LENGTH -> obter o tamanho dae uma string ou array(podendo definir como exemplo uma quantidade de letras ou quantidade de elementos)

//quantidade de letras(string)
let string = "Texto qualquer";
let tamanho = string.length;
console.log(tamanho);

//quantidade de elementos(dentro de um array)
let carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"];
let elementos = carros.length;
console.log(elementos);

for(let el =0; el< carros.length; el++){
    console.log(carros[el]); // obtem uma string de cada elementos do array
}


//conseguimos usar .LENGHT para definir uma quantidade min/max/exata, ultizando if/else ou  operador ternario 
const senha = "thiago"
const autorizacao = senha.length < 6 ? "senha invalida" : "senha valida!"
console.log(autorizacao)