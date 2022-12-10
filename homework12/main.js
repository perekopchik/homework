document.addEventListener('DOMContentLoaded', function () {
    function Slider(prevButton, nextButton, list) {
        const _prev = document.querySelector(prevButton);
        const _next = document.querySelector(nextButton);
        const _list = document.querySelector(list);

        const changeItem = function (active, newElement) {
            if (newElement) {
                active.classList.remove('active');
                newElement.classList.add('active');
            }
        }
        this.lenght = 15;
        /*        const check = function (active, element, slide) {
                    if (active.nextElementSibling.textContent === slide) {
                        element.classList.add('slider__opacity');
                    }
                }*/

        _next.addEventListener('click', function () {
            const active = _list.querySelector('.active');
            _prev.classList.remove('slider__opacity');
            if (active.nextElementSibling.textContent === '15') {
                _next.classList.add('slider__opacity');
            }
            changeItem(active, active.nextElementSibling);
        })
        _prev.addEventListener('click', function () {
            const active = _list.querySelector('.active');
            _next.classList.remove('slider__opacity');
            if (active.previousElementSibling.textContent === '1') {
                _prev.classList.add('slider__opacity');
            }
            changeItem(active, active.previousElementSibling);
        })
    }

    const slider = new Slider('.js--slider__prev', '.js--slider__next', '.js--list');
    console.log(slider);

})