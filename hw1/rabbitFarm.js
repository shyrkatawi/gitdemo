/* Есть ферма по разведению кроликов,нужно высчитать,
сколько останется кроликов через заданное кол-во месяцев
и вывести кол-во кроликов каждый месяц при условии,что: 
-каждый четный месяц отнимается 50% кроликов,иначе,если кол-во кроликов больше 100,то отнимай 20%
-в конце каждого месяца добавляется 20 кроликов
-изначально кроликов 200.Кол-во месяцев 6(январь первый); */

function calculateRabbitCount(months) {
    let rabbitCount = 200;
    let currentMonth = 1;
    for (let i = 0; i < months; i++, currentMonth++) {
        if (currentMonth % 2 === 0) {
            rabbitCount = Math.floor(rabbitCount / 2);
        } else if (rabbitCount > 100) {
            rabbitCount = rabbitCount - Math.floor(rabbitCount / 5);
        }
        rabbitCount += 20;
    }
    return rabbitCount;
}


const monthCount = 3;
let rabbitCount = 200;

function calculateRabbitCount1() {
    for (i = 1; i <= monthCount; i++) {
        if (i % 2 === 0 && rabbitCount > 100) {
            rabbitCount = Math.floor(rabbitCount - rabbitCount / 5);
        }
        if (i % 2 === 0 && rabbitCount <= 100) {
            rabbitCount = Math.floor(rabbitCount / 2);
        }
        rabbitCount = rabbitCount + 20;
        console.log(i + ' month ' + rabbitCount);
    }
}

console.log(calculateRabbitCount(1));
console.log(calculateRabbitCount(2));
console.log(calculateRabbitCount(3));

module.exports = calculateRabbitCount;