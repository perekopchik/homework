const _list = document.querySelector('.js--list');
const _prev = document.querySelector('.js--slider__prev');
const _next = document.querySelector('.js--slider__next');
const _listDot = document.querySelector('.js--dots');
const changeItem = function (active, newElement) {
    if (newElement) {
        active.classList.remove('active');
        newElement.classList.add('active');
    }
}

change = function (){
    const active =_list.querySelector('.active');
    const activeDot = _listDot.querySelector('.active');
    _prev.classList.remove('slider__opacity');
    if (active.nextElementSibling.textContent === '15') {
        _next.classList.add('slider__opacity');
        clearInterval(timerId);
    }
    changeItem(activeDot, activeDot.nextElementSibling);
    changeItem(active,active.nextElementSibling);
}
this.timerId = setInterval(change, 5000);
_next.addEventListener('click', () => {
    clearInterval(this.timerId);
    const activeDot = _listDot.querySelector('.active');
    const active = _list.querySelector('.active');
    _prev.classList.remove('slider__opacity');
    if (active.nextElementSibling.textContent === '15') {
        _next.classList.add('slider__opacity');
    }
    changeItem(activeDot, activeDot.nextElementSibling);
    changeItem(active, active.nextElementSibling);
    this.timerId = setInterval(change, 5000);
})
_prev.addEventListener('click', () => {
    clearInterval(this.timerId);
    const activeDot = _listDot.querySelector('.active');
    const active = _list.querySelector('.active');
    _next.classList.remove('slider__opacity');
    if (active.previousElementSibling.textContent === '1') {
        _prev.classList.add('slider__opacity');
    }
    changeItem(activeDot, activeDot.previousElementSibling);
    changeItem(active, active.previousElementSibling);
    this.timerId = setInterval(change, 5000);
})
