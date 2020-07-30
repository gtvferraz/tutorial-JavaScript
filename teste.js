//Variáveis
//toda variável em jf é elevada ao topo do seu escopo, então pode utilizar ela antes de declara-la
//var - variável sem escopo
//let - variável com escopo
//const - constante com escopo, tem que ser inicializada na declaração

//Selecionar um elemento do html
//document.querySelector('#teste').textContent = teste; pelo id
//document.querySelector('teste').textContent = teste; pela tag
//document.querySelector('.teste').textContent = teste; pela classe
/*
const root = document.querySelector("#root");
const saida = document.createElement('h3');
saida.textContent = "Elemento Novo";
root.append(saida);
*/

//if ternario
//condição ? verdadeiro : falso
/*
console.log(1 > 2 ? 'Verdade' : 'Falso');
1 > 2 ? console.log('Verdade') : console.log('Falso'); //Mesma coisa 
*/

//Concatenação
/*
let nome = 'Gustavo';
let sobrenome = 'Albuquerque'

console.log(`Concatenação: ${nome} ${sobrenome}`);
*/

//Objeto
/*
function novoEndereco(cidade, rua) {
    const endereco = {cidade, rua};
    const endereco2 = {cid: cidade, r: rua};
    console.log("Objeto 1: ", endereco);
    console.log("Objeto 2: ", endereco2);
    //endereco e endereco2 são idênticos, pois como o nome dos campos em endereco são iguais ao das variáveis, seus valores são automaticamento passados para os campos, sem precisar ser especificado
}
novoEndereco('Juiz de Fora', 'Bernardo Mascarenhas');

const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName: fn, lastName: ln} = personalInformation; //Atribui o firstName e o lastName para fn e ln respectivamente
console.log(`${fn} ${ln}`);
const {firstName, city} = personalInformation; //Se colocarmos o nome da variável igual ao nome do atributo do objeto, a referência é feita de forma automática
console.log(firstName, city);
*/

//Array
/*
let nomes = ['Gustavo', 'Giulia', 'Raphael'];
let [sobrenome, ultimonome] = ['Albuquerque', 'Ferraz'] //Quando usamos [] do lado esquerdo do =, o array que está sendo atribuido será desmembrado para as variáveis dentro do []

console.log(nomes[0]);
console.log(sobrenome + ' ' + ultimonome);
*/

//Estrutura de Repetição
/*
const valores = [3, 2, 3];
const nome = 'Gustavo Albuquerque Ferraz';
let total = 0;

for (let i=0; i<3; i++) {
    total += valores[i];
}
console.log(total);

total = 0;
for (const valor of valores) {
    total += valor;
}
console.log(total);

for (const char of nome) {
    console.log(char);
}

total = 0
let retorno = valores.forEach(function (elemento, indice, arrayOriginal) { //executa uma função para cada elemento do array
    total += elemento;
    console.log(indice);
    console.log(arrayOriginal[indice]);
    return elemento;
});
console.log(total);
console.log(retorno);

total = 0
retorno = valores.map(function (elemento, indice, arrayOriginal) { //executa uma função para cada elemento do array
    total += elemento;
    console.log(indice);
    console.log(arrayOriginal[indice]);
    return elemento;
});
console.log(total);
console.log(retorno);
*/

//Operador Spread
/*
const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1]; //Copia o array1 para o array2
array2.push(true); //Uma alteração em array2 não afeta o array1

console.log(array1);
console.log(array2);

const objeto1 = {
    nome: 'Gustavo'
};
const objeto2 = {
};
const objeto3 = {
    nome: 'Nao Preenchido', //Funciona como um valor default caso objeto1 seja vazio
    ...objeto1
};
const objeto4 = {
    nome: 'Nao Preenchido', //Funciona como um valor default caso objeto2 seja vazio
    ...objeto2
};

console.log(objeto3);
console.log(objeto4);
*/

//Operador Rest
/*
function numeros(...valores) { //Utilizando os três pontos consigo ler quantos argumetos eu quiser e armazena-los num array
    console.log(valores);
}
numeros(1, 2, 3);
numeros(1, 2, 3, 4);
*/

//Funções Arrow
/*
//A função reduce() executa uma função para cada elemento do array, retornando apenas um valor
const valores = [1, 2, 3, 4];
let total = valores.reduce(function (x, y) { //x é o acumulador, y representa o valor do elemento da iteração atual
    return x + y;
});
console.log(total);

total = 0;
total = valores.reduce((x, y) => x + y); //É a mesma coisa feita anteriormente
console.log(total);

total = 0;
valores.forEach((elemento => total += elemento));
console.log(total);

total = 0;
valores.map((elemento => total += elemento));
console.log(total);
*/

//Parâmetros Default
/*
function func(valores = []) {
    let total = 0;
    valores.forEach(elemento => total += elemento);
    console.log(total);
}
func(); //Nao vai gerar erro pois o array valores tem um valor padrao
func([1, 2, 3]);
*/

//Como alterar um campo de um objeto de forma dinâmica
/*
const values = {nome: "Opa", idade: 5};
const campo = "nome";
const valor = "Mudado";
const saida = {
    ...values,
    [campo]: valor,
}
console.log(values);
console.log(saida);
*/

//Export
//export const data = [1,2,3];
