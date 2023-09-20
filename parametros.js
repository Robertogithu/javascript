// parâmetros de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(15, 30))
console.log(soma(105, 300))
console.log(soma(150, 305))

// parâmentros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
    }
console.log(nomeIdade("Roberto", 42))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(2, 6)))

