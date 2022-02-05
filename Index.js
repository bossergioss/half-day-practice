//Task 1

/* Вычислить сумму первых N элементов последовательности, параметр N задает пользователь. (1+2+3.....+N) */

function getSum(N) {
    let res = 0;
    for(i = 1; i <= N; i++){
        res += i;
    }
    return res;
}

//Task 2

/* 2.1 Создать объект Student, который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, содержащий информацию о факультете и кафедре.
2.3. Связать объекты между собой, т.е. прописать данные о факультете и кафедре для студента.
2.4 Реализовать функцию вывода на экран полной информации о студенте. */

const student = {
    firstName: 'Bohdan', 
    lastName: 'Kuznetsov',
    isMale: 'true',
    contData: '+380123456789'
} 

const directionInfo = {
    faculty: 'electrotechnic',
    department: 'electric machines'
}

student.prototype = directionInfo;

function getFullInfo() {
    return student;
}

//Task 3

/* 3.1 Создать числовой массив и проинициализировать его 25 элементами с помощью случайных чисел.
3.2 Вывести элементы с четными индексами.
3.3 Вывести только четные элементы
3.4 Вывести индексы нулевых элементов (элемент = 0)
3.5 Посчитать количество нулевых элементов */

function createRandomArray () {
    const tempArr = [];
    for (i = 0; i < 25; i++) {
         tempArr.push(Math.round(Math.random()*10));
    }
    return tempArr;
}

function getElemOfEvenInd (arr) {
    const resArr = arr.filter((_, index) => index % 2 === 0);
    return resArr;
}

function getEvenElem (arr) {
    const resArr = arr.filter(elements => elements % 2 === 0);
    return resArr;
}

function getIndexOfZElem(arr) {
    let resArray = [];
    for (i=0; i < arr.length; i++) {
        if (arr[i] === 0) {
        resArray.push(i);
        
        } 
    } return `Индексы элементов с нулевыми значениями: ${resArray}`;
}

function getSumOfZeroElem (arr) {
    const resArr = arr.filter(elements => elements === 0);
    return resArr.length;
}

// Task 4

/* Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат файла, электронный номер) */

class Book {
    constructor(author, name, year, publishHouse){
        this.author = author;
        this.name = name;
        this.year = year;
        this.publishHouse = publishHouse;
    }
}

class ElectronicBook  extends Book{
    constructor(author, name, year, publishHouse, fileFormat, electronicNumber){
    super(author, name, year, publishHouse);
    this.fileFormat = fileFormat;
    this.electronicNumber = electronicNumber;
    }
}


