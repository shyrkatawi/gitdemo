/* Regarding the input array,write a functions:
- input city and prints all matched;
- input age and prints less or same age;
- filter students by alphabetic names and prints only names;
- filter female students by married status;
- input age and sex and prints matched;
- input object with a new student and add it to the start of array;
- print all unique cities;
Each bullet - new function. */


function printStudentsUniqueCities() {
    let cities = {
        //Mogilev:2
    };
    for (const student of students) {
        if (!cities[student.city]) { //undefined if(cities[student.city]===1)
            cities[student.city] = 1;
        } else {
            cities[student.city] = cities[student.city] + 1;
        }
    }
    console.log(cities);
    // for (const [cityName, amount] of Object.entries(cities)) {
    for (const entries of Object.entries(cities)) {
        const cityName = entries[0];
        const amount = entries[1];
        if (amount === 1) {
            console.log(cityName);
        }
    }
}

let students = [
    {
        name: 'Vasya Pupkin',
        age: 17,
        sex: 'Male',
        isMarried: false,
        city: 'Mogilev',
    },
    {
        name: 'Zoya Petrovna',
        age: 23,
        sex: 'Female',
        isMarried: true,
        city: 'Mogilev',
    },
    {
        name: 'Petr Ivanov',
        age: 30,
        sex: 'Male',
        isMarried: true,
        city: 'Minsk',
    },
    {
        name: 'Vitali Ivanov',
        age: 19,
        sex: 'Male',
        isMarried: false,
        city: 'Vitebsk',
    },
    {
        name: 'Lavrenti Sakalov',
        age: 20,
        sex: 'Male',
        isMarried: true,
        city: 'Brest',
    },
    {
        name: 'Olga Sakalova',
        age: 23,
        sex: 'Female',
        isMarried: true,
        city: 'Brest',
    },
]


function printStudentsByCity(students, city) {
    for (const student of students) {
        if (student.city === city) {
            console.log(student);
        }
    }
    console.log()
    // let result = students.filter(item => item.city === city);
    // console.log('Students in city ' + city, result);
}

// printStudentsByCity(students, 'Mogilev');

function printStudentsWithLessOrSameAge(age) {
    for (const student of students) {
        if (student.age <= age) {
            console.log(student);
        }
    }
    console.log()
    // let result = students.filter(item => item.age <= age);
    // console.log('Students less or equal ' + age, result);
}

// printStudentsWithLessOrSameAge(20);

function printSortedStudentsNames() {
    const names = students.map(item => item.name, []);
    names.sort();
    console.log('Students names sort by alphabetic', names);
}

// printSortedStudentsNames();

function getFemaleMarriedStudents() {
    return students.filter(student => student.sex === 'Female' && student.isMarried);
}

// console.log(getFemaleMarriedStudents());

function printStudentsByAgeAndSex(age, sex) {
    for (const student of students) {
        if (student.age === age && student.sex === sex) {
            console.log(student);
        }
    }
    // let result = students.filter(item => item.age === age && item.sex === sex);
    // console.log('Students ' + age + 'years old and ' + sex, result);
}

// printStudentsByAgeAndSex(23,'Female')

function addStudentToBeginningOfArray(student) {
    students = [student, ...students];
}

// console.log(students)
// console.log("rfgthyjmk,l")
// console.log("rfgthyjmk,l")
// console.log("rfgthyjmk,l")
// console.log("rfgthyjmk,l")
// console.log("rfgthyjmk,l")
// addStudentToBeginningOfArray({a:1});
// console.log(students)


printStudentsUniqueCities();

function printCities() {
    let output = [];
    let result = students.map(item => item.city)
    for (let str of result) {
        if (!output.includes(str)) {
            output.push(str);
        }
    }
    console.log(output)
}


let newStudent = {
    name: 'Josef Orlov',
    age: 49,
    sex: 'Male',
    isMarried: true,
    city: 'Wellington',
}


// module.exports = printCities, searchCity, add, searchAgeAndSex, sortNames, searchAge, newStudent;