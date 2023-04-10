const preçoValor = 35
const preço1 = document.getElementById("preço1")
const preço2 = document.getElementById("preço2")
const preço3 = document.getElementById("preço3")

let quantidade1 = document.getElementById("quantidade1")
let quantidade2 = document.getElementById("quantidade2")
let quantidade3 = document.getElementById("quantidade3")

let quantidadeValor1 = 1
let quantidadeValor2 = 1
let quantidadeValor3 = 1

preço1.innerHTML = preçoValor + ",40"
preço2.innerHTML = preçoValor + ",40"

quantidade1.innerHTML = quantidadeValor1
quantidade2.innerHTML = quantidadeValor2
quantidade3.innerHTML = quantidadeValor3

///////////

function aumentarQuant1() {
    quantidadeValor1 ++
    quantidade1.innerHTML = quantidadeValor1
    total1.innerHTML = preçoValor * quantidadeValor1
    valorFinal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
    subTotal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3

}

function aumentarQuant2() {
    quantidadeValor2 ++
    quantidade2.innerHTML = quantidadeValor2
    total2.innerHTML = preçoValor * quantidadeValor2
    valorFinal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
    subTotal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3

}

function aumentarQuant3() {
    quantidadeValor3 ++
    quantidade3.innerHTML = quantidadeValor3
    total3.innerHTML = preçoValor * quantidadeValor3
    valorFinal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
    subTotal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
}

function diminuirQuant1() {
    quantidadeValor1 --
    quantidade1.innerHTML = quantidadeValor1
    total1.innerHTML = preçoValor * quantidadeValor1
    valorFinal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
    subTotal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3

}

function diminuirQuant2() {
    quantidadeValor2 --
    quantidade2.innerHTML = quantidadeValor2
    total2.innerHTML = preçoValor * quantidadeValor2
    valorFinal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
    subTotal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
}

function diminuirQuant3() {
    quantidadeValor3 --
    quantidade3.innerHTML = quantidadeValor3
    total3.innerHTML = preçoValor * quantidadeValor3
    valorFinal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
    subTotal.innerHTML = preçoValor * quantidadeValor1 + preçoValor * quantidadeValor2 + preçoValor * quantidadeValor3
}

/////////

const total1 = document.getElementById("total1")
const total2 = document.getElementById("total2")
const total3 = document.getElementById("total3")

total1.innerHTML = preçoValor * quantidadeValor1
total2.innerHTML = preçoValor * quantidadeValor2
total3.innerHTML = preçoValor * quantidadeValor3


const valorFinal = document.getElementById("valorFinal")

valorFinal.innerHTML = 35 + 105

const subTotal = document.getElementById("subTotal")
subTotal.innerHTML = 35 + 105


