// Задание 1
// Задайте в коде переменную n с числовым значением.
// С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
const n = 50;
if (n >= 0 && n <= 100) {
  console.log(
    `Переменная n = ${n} находится в диапазоне чисел от 0 до 100 включительно`
  );
}

//Задание 2
// Дан объект с именами и заработными платами:
const engineers = {
  Den: 1000,
  Matt: 5000,
  Steve: 2000,
};
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.
// ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!
for (let key in engineers) {
  console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`);
}

// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.
const cities = ["London", "Paris", "Minsk", "Rome", "Amsterdam"];
for (i = 1; i < cities.length; i += 2) {
  console.log(cities[i]);
}

// Задание 4
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.
for (let i = 0; i < numbers.length; i++) {
  console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
}

//Задание 5
// Дан массив объектов, например:
let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];
// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.
for (let element of questions) {
  element.usersAnswer = null;
}
console.log(questions);

// Задание 6
// Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
for (let element of numbers) {
  console.log(element);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 2) Посчитать и вывести в консоль сумму элементов в массиве.
// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
let sum = 0;
for (let element of numbers) {
  sum += element;
}
console.log(sum);

// 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.
let result = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    result += numbers[i];
  }
}
console.log(result);

// 4) Найти и вывести в консоль максимальное число массива.
// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.
let maxNumber = numbers[0];
for (let element of numbers) {
  if (maxNumber < element) {
    maxNumber = element;
  }
}
console.log(maxNumber);

// 5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.
let indexMax = 0;
for (let i = 0; i < numbers.length; i++) {
  if (maxNumber == numbers[i]) {
    indexMax = i;
    console.log(indexMax);
  }
}

// Задание 7
// Определить массив
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.
let newArr = [];
for (let element of arr) {
  if (element >= 0) {
    newArr.push(element);
  }
}
console.log(newArr);

// Задание 8
// Определить массив, например
let nums = [5, 4, 3, 8, 0, 20, 6, -9];
//  и переменную
let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.
let newNums = [];
for (let element of nums) {
  if (element >= limit) {
    newNums.push(element);
  }
}
console.log(newNums);

// Задание 9
// Существует массив объектов, описывающих пользователей, например:
const users = [
  { name: "Vasya", age: 23 },
  { name: "Olya", age: 12 },
  { name: "Anna", age: 22 },
  { name: "Alex", age: 18 },
  { name: "Valery", age: 8 },
];

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.
for (let element of users) {
  if (element.age > 15) {
    console.log(element.name);
  }
}

// Задание 10
// Задать массив слов. Например:

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// 1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):
// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
// Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)
let newVegetables = [];
for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
  newVegetables.push({ word: vegetables[i], length: vegetables[i].length });
}
console.log(newVegetables);

// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"
for (let element of newVegetables) {
  console.log(`${element.word} - ${element.length}`);
}
