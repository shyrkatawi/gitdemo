/* Вывести числа Фибоначчи(от 0 до 100).В конце вывести количество этих чисел.
Это последовательность чисел,в которой каждое следующее число является суммой двух предыдущих чисел.
Начинается последовательность с нуля и единицы(ноль иногда опускают).
Выглядит это так: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34… и так до бесконечности. */

function fibonacci(max) {
    let result = [0, 1],
        value;

    for (let i = 1; result[i] < max; i++) {
        value = result[i] + result[i - 1];
        value <= max && result.push(value);
    }
    console.log("Fibonacci numbers are " + result);
    console.log("The quantity of Fibonacci numbers is " + result.length);
}

// решение в 1 строку
//var fibonacci = (n) => Array(n).fill().reduce((a, b, c) => a.concat(c < 2 ? c : a[c - 1] + a[c - 2]), []);
//console.log(fibonacci(100));

module.exports = fibonacci;