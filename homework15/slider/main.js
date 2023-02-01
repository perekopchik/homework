function Slider(prevButton, nextButton, list, dot) {
    const _prev = document.querySelector(prevButton);
    const _next = document.querySelector(nextButton);
    const _list = document.querySelector(list);
    const _listDot = document.querySelector(dot);

    this.changeItem = function (active, newElement) {
        if (newElement) {
            active.classList.remove('active');
            newElement.classList.add('active');
        }
    }
    this.length = document.querySelectorAll('li').length;
    this.next = function () {
        const active = _list.querySelector('.active');
        const activeDot = _listDot.querySelector('.active');
        _prev.classList.remove('slider__opacity');
        if (active.nextElementSibling.textContent === '15') {
            _next.classList.add('slider__opacity');
        }
        this.changeItem(activeDot, activeDot.nextElementSibling);
        this.changeItem(active, active.nextElementSibling);
    }
    this.prev = function () {
        const active = _list.querySelector('.active');
        const activeDot = _listDot.querySelector('.active');
        _next.classList.remove('slider__opacity');
        if (active.previousElementSibling.textContent === '1') {
            _prev.classList.add('slider__opacity');
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

