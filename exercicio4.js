
let produto1 = {
nome: 'molho de tomate',
categoria: 'comida',
preco: 3
};

let produto2 = {
nome: 'macarrão',
categoria: 'comida',
preco: 6
};

let produto3 = {
nome:'coca-cola',
categoria:'bebida',
preco: 6.40

};

let produto4 = {
nome:'guaraná',
categoria:'bebida',
preco: 5

};

let produto5 = {
nome: 'água sanitária',
categoria:'limpeza',
preco: 2    
};

let produto6 = {
nome:'esponja',
categoria:'limpeza',
preco: 1
};

let estoquedeprodutos = []
estoquedeprodutos.push(produto1)
estoquedeprodutos.push(produto2)
estoquedeprodutos.push(produto3)
estoquedeprodutos.push(produto4)
estoquedeprodutos.push(produto5)
estoquedeprodutos.push(produto6)

let indiceMenorPreco = 0;
let menorPreco = estoquedeprodutos[0].preco


for ( let i = 0 ; i < estoquedeprodutos.length ; i++){
if ( estoquedeprodutos[i].preco < menorPreco ){
   menorPreco = estoquedeprodutos[i].preco;
   indiceMenorPreco = i;
}
}

console.log(" o preco de " + estoquedeprodutos[indiceMenorPreco].nome + " é o menor preço do estoque R$" + estoquedeprodutos[indiceMenorPreco].preco )