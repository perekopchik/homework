//1) Нужно сделать форму кредитной карты. Пример интерфейса: https://drive.google.com/file/d/1CmN_Te5EgcGePq-8nQejh2t83KFTpGdR/view?usp=drivesdk
//
// 2) Блок над формой (карточка) нужно сверстать через HTML. При изменении полей формы нужно подставлять значения в нужные поля над формой (в саму карточку).
//
// 3) При отправке формы, выводить её данные в консоль
//
// При желании, вы можете сделать форму и карточку проще. Например, опустить часть стилей и сделать карточку просто в виде набора span тегов, в которые потом будет вставляться результат ввода в форму.
document.addEventListener('DOMContentLoaded',function () {
        function Cards(cardName, cardNumber, cardMonth, cardYear, cardCvv) {
            this.cardNumber = document.querySelector('.card-number-input');
            this.cardName = document.querySelector('.card-holder-input');
            this.cardMonth = document.querySelector('.month-input');
            this.cardYear = document.querySelector('.year-input');
            this.cardCvv = document.querySelector('.cvv-input');
            this.cardNumberPhoto = document.querySelector('.cardNumberPhoto');
            this.cardNamePhoto = document.querySelector('.cardNamePhoto');
            this.cardDatePhoto = document.querySelector('.cardDatePhoto');
            this.showCard = (event) => {
                event.preventDefault();
                this.showInfo();
                this.addToPhoto();
            }
            this.showInfo = function (){
                console.log(`Сard Number : ${this.cardNumber.value}`);
                console.log(`Card Name : ${this.cardName.value}`);
                console.log(`MM/YY : ${this.cardMonth.value} / ${this.cardYear.value}`);
                console.log(`CVV : ${this.cardCvv.value}`);
            }
            this.addToPhoto = function (){
                let cardDate = `${this.cardMonth.value} / ${this.cardYear.value}`;
                this.cardDatePhoto.innerHTML= cardDate;
                this.cardNumberPhoto.innerHTML= this.cardNumber.value;
                this.cardNamePhoto.innerHTML= this.cardName.value;
            }
        }

        const card = new Cards('.card-number-input', '.card-holder-input', '.month-input', '.year-input', '.cvv-input')
        document.querySelector('.js--form').addEventListener('submit', card.showCard)
    })
