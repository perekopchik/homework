//1) Нужно сделать форму кредитной карты. Пример интерфейса: https://drive.google.com/file/d/1CmN_Te5EgcGePq-8nQejh2t83KFTpGdR/view?usp=drivesdk
//
// 2) Блок над формой (карточка) нужно сверстать через HTML. При изменении полей формы нужно подставлять значения в нужные поля над формой (в саму карточку).
//
// 3) При отправке формы, выводить её данные в консоль
//
// При желании, вы можете сделать форму и карточку проще. Например, опустить часть стилей и сделать карточку просто в виде набора span тегов, в которые потом будет вставляться результат ввода в форму.
document.addEventListener('DOMContentLoaded', function () {
    function Cards(cardName, cardNumber, cardMonth, cardYear, cardCvv) {
        this.cardNumber = document.querySelector(cardNumber);
        this.cardName = document.querySelector(cardName);
        this.cardMonth = document.querySelector(cardMonth);
        this.cardYear = document.querySelector(cardYear);
        this.cardCvv = document.querySelector(cardCvv);
        this.showCard = (event) => {
            event.preventDefault();
            this.showInfo();
        }
        this.showInfo = function () {
            console.log(`Сard Number : ${this.cardNumber.value}`);
            console.log(`Card Name : ${this.cardName.value}`);
            console.log(`MM/YY : ${this.cardMonth.value} / ${this.cardYear.value}`);
            console.log(`CVV : ${this.cardCvv.value}`);
        }
    }

    function addToPhoto(cardValueInput, cardValuePhoto) {
        let cardValue = document.querySelector(cardValueInput);
        let cardValueToPhoto = document.querySelector(cardValuePhoto);
        cardValue.addEventListener('keyup', function () {
            let text = cardValue.value;
            cardValueToPhoto.innerHTML = text;
        })
    }

    function addToPhotoDate(cardValueInput, cardValuePhoto) {
        let cardValue = document.querySelector(cardValueInput);
        let cardValueToPhoto = document.querySelector(cardValuePhoto);
        cardValue.addEventListener('click', function () {
            let text = cardValue.value;
            cardValueToPhoto.innerHTML = text;
        })
    }

    addToPhoto('.card-number-input', '.cardNumberPhoto');
    addToPhoto('.card-holder-input', '.cardNamePhoto');
    addToPhotoDate('.month-input', '.cardMonthPhoto');
    addToPhotoDate('.year-input', '.cardYearPhoto');
    const card = new Cards('.card-number-input', '.card-holder-input', '.month-input', '.year-input', '.cvv-input')
    document.querySelector('.js--form').addEventListener('submit', card.showCard)
})
