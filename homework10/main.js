//На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt адрес ссылки, при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).
const buttonInput = document.querySelector(".js--button_input");
const buttonMove = document.querySelector(".js--button_move");
let text;
buttonInput.addEventListener("click",function (){
    text = prompt('Введите адрес ссылки');
});
buttonMove.addEventListener("click",function (){
   window.location.href= text ;
});
