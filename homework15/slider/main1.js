class Slider {
    length = document.querySelectorAll('li').length;

    constructor(prevButton, nextButton, list, dot) {
        this._prev = document.querySelector(prevButton);
        this._next = document.querySelector(nextButton);
        this._list = document.querySelector(list);
        this._listDot = document.querySelector(dot);
    }

    changeItem(active, newElement) {
        if (newElement) {
            active.classList.remove('active');
            newElement.classList.add('active');
        }
    }

    next() {
        const active = this._list.querySelector('.active');
        const activeDot = this._listDot.querySelector('.active');
        this._prev.classList.remove('slider__opacity');
        if (active.nextElementSibling.textContent === '15') {
            this._next.classList.add('slider__opacity');
        }
        this.changeItem(activeDot, activeDot.nextElementSibling);
        this.changeItem(active, active.nextElementSibling);
    }

    prev() {
        const active = this._list.querySelector('.active');
        const activeDot = this._listDot.querySelector('.active');
        this._next.classList.remove('slider__opacity');
        if (active.previousElementSibling.textContent === '1') {
            this._prev.classList.add('slider__opacity');
        }
        this.changeItem(activeDot, activeDot.previousElementSibling);
        this.changeItem(active, active.previousElementSibling);
    }
}

const slider = new Slider('.js--slider__prev', '.js--slider__next', '.js--list', '.js--dots');
document.querySelector('.js--slider__next').addEventListener('click', function () {
    slider.next();
})
document.querySelector('.js--slider__prev').addEventListener('click', function () {
    slider.prev();
})
