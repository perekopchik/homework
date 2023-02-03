function Slider(prevButton, nextButton, list, dot) {
    this.timer = undefined;
    this._prev = document.querySelector(prevButton);
    this._next = document.querySelector(nextButton);
    this._list = document.querySelector(list);
    this._listDot = document.querySelector(dot);

    this.changeItem = function (active, newElement) {
        if (newElement) {
            active.classList.remove('active');
            newElement.classList.add('active');
        }
    }
    this.length = document.querySelectorAll('li').length;
}

Slider.prototype.next = function () {
    const active = this._list.querySelector('.active');
    const activeDot = this._listDot.querySelector('.active');
    const dotsLength = String(this._listDot.getElementsByTagName('li').length);
    this._prev.classList.remove('slider__opacity');
    if (active.nextElementSibling?.textContent === dotsLength) {
        this._next.classList.add('slider__opacity');
    }
    this.changeItem(activeDot, activeDot.nextElementSibling);
    this.changeItem(active, active.nextElementSibling);
}
/*Slider.prototype.auto = function (){
    const active = this._list.querySelector('.active');
    const dotsLength = String(this._listDot.getElementsByTagName('li').length);
    do {
        this.timer = setInterval(this.next, 1000);
    }while(active.nextElementSibling?.textContent === dotsLength);
}*/
Slider.prototype.prev = function () {
    const active = this._list.querySelector('.active');
    const activeDot = this._listDot.querySelector('.active');
    this._next.classList.remove('slider__opacity');
    if (active.previousElementSibling?.textContent === '1') {
        this._prev.classList.add('slider__opacity');
    }
    this.changeItem(activeDot, activeDot.previousElementSibling);
    this.changeItem(active, active.previousElementSibling);
}

const slider = new Slider('.js--slider__prev', '.js--slider__next', '.js--list', '.js--dots');
document.querySelector('.js--slider__next').addEventListener('click', function () {
    slider.next();
})
document.querySelector('.js--slider__prev').addEventListener('click', function () {
    slider.prev();
})

