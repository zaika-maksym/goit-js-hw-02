console.log('---Задание-№6');

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число')

    if (input === null) {
        break;
    }
 
    input = Number(input);

    if (Number.isNaN(input)) {
        alert ('Было введено не число, попробуйте еще раз') 
    } else {
        numbers.push(input);
    }
}


for (const number of numbers) {
    total += number;
}

alert(`Общая сумма чисел равна ${total}`);

console.log('Общая сумма чисел равна',total);