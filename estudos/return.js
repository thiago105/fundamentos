//RETURN
//obter o resultado sem return -> console é chamado dentro da funcao e chamado fora
function somar(a, b){
    console.log(a + b)
}
somar(2, 3);

//obter resultado com return ->return e feito a soma dentro e console execultado fora chamando ou nao a funcao para a soma 
function multiplicar(a, b){
    return a * b
}
console.log(2, 3) ;// retorna os elemento pedido(2 3)
console.log(multiplicar(2, 3)); //retorna a multi. solicitada

//obter resultado apenas chamando a funcao 
function sampa(){
    return console.log("ola")
}
sampa()




