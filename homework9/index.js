//Есть блок с текстом на странице и кнопка. При нажатии на кнопку текст изменяет цвет. При повторном нажатии – возвращается предыдущий цвет
const button = document.querySelector('.textColor');
let value = false;
button.addEventListener('click',function (){
    const text = document.querySelector('span');
    if(value){
        text.style.color = 'red';
        value = false;
    }else{
        text.style.color = 'black';
        value = true;
    }
})