/*
Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.*/
newArray = [10,20,30];
const callBack  = function (previousValue,currentValue){
    return previousValue+currentValue;
}
let number =  newArray.reduce(callBack,0);
const arrayLength = newArray.length;
const average = number/arrayLength;
console.log(average);

