/*
Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.*/
function calcAverage (newArray){
    let number = 0;
    for(let value of newArray) {
        number += value;
    }
    const arrayNumber = newArray.length;
    return number / arrayNumber;
}
const average = calcAverage([10,20,30]);
console.log(average);