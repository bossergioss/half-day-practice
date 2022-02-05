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