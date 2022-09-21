const a = 2
const b = 5
const c = 10

let adição = (a + b)
let subtração = (a - b)
let multiplicação = (a * b)
let divisão = (a / b)
let modulo = (a % b)

if (a > b){
    console.log('a é maior que b')
} else {
    console.log('b é maior que a')
}

if (a > b && a > c) {
    console.log('a é maior que b e c')
} else if (b > a && b > c) {
    console.log('b é maior que a e c')
} else {
    console.log('c é maior que a e b')
}

if (a > 0) {
    console.log('Positive')
} else if (a < 0) {
    console.log('Negative')
} else {
    console.log('Zero')
}

const t = 40
const r = 60
const i = 80

let somaDeTri = t + r + i;
let todosTriSaoPosit = t > 0 && r > 0 && i > 0;

if (todosTriSaoPosit) {
    if (somaDeTri === 180) {
        console.log(true)
    } else {
        console.log(false)
    }
} else {
    console.log('Não tem um angulo valido')
}

