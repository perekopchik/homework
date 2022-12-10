document.addEventListener('DOMContentLoaded', function () {
    function Slider(prevButton, nextButton, list) {
        const _prev = document.querySelector(prevButton);
        const _next = document.querySelector(nextButton);
        const _list = document.querySelector(list);

        this.changeItem = function (active, newElement) {
            if (newElement) {
                active.classList.remove('active');
                newElement.classList.add('active');
            }
        }
        this.length = document.querySelectorAll('li').length;
        _next.addEventListener('click', () => {
            const active = _list.querySelector('.active');
            _prev.classList.remove('slider__opacity');
            if (active.nextElementSibling.textContent === '15') {
                _next.classList.add('slider__opacity');
            }
            this.changeItem(active, active.nextElementSibling);
        })
        _prev.addEventListener('click', () => {
            const active = _list.querySelector('.active');
            _next.classList.remove('slider__opacity');
            if (active.previousElementSibling.textContent === '1') {
                _prev.classList.add('slider__opacity');
            }
            this.changeItem(active, active.previousElementSibling);
        })
    }

    const slider = new Slider('.js--slider__prev', '.js--slider__next', '.js--list');
    console.log(slider);

})

