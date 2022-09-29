//Есть блок с текстом на странице и кнопка. При нажатии на кнопку текст изменяет цвет. При повторном нажатии – возвращается предыдущий цвет
const button = document.querySelector('.textColor');
const text = document.querySelector('span');
let value = false;
const black = function () {
    text.style.color = 'black';
}
const red = function () {
    text.style.color = 'red';
}
button.onclick = function (){
    if(value){
        red();
        value = false;
    }else{
        black();
        value = true;
    }
}
