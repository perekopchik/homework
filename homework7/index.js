/*Создать функцию для расчета произведения двух чисел, вызываемого следующим образом: name(5)(2). Функция должна возвращать результат (в середине функции не должно быть консоль лога!)*/
function calcMultiplication(a,b){
    return a*b;
}
const result = calcMultiplication(2,5);
console.log(result);