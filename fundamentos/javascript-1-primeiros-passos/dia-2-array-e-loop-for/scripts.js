// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// menu.push('Contato')

// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for (let i = 0; i < groceryList.length; i += 1) {
//     console.log(groceryList[i])
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let n of names) {
//     console.log(n)
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

let result = 0;
for (let index = 0; index < numbers.length; index +=1) {
    result += numbers[index]  
}   console.log(result)

let average = result / numbers.length
console.log(average)

if (average >= 20) {
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual a 20')
}