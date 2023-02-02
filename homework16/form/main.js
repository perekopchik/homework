function FormValidate(form){
    const _errorWrapperClass = 'error';
    const _errorItemClass = 'error__item';
    const _parentItemClass = 'form-control';
    const _elements = form.elements;

    form.addEventListener('submit',(event) =>{
        event.preventDefault();
        this.checkFormElement();
        /*this.checkForm*/

    })
        //Обязательное поле
    //Валидный Email
    //Минимальная длина
    this.checkFormElement = function (){
        this.errorTemplate = function (element, message){
            const parent = element.closest(`.${_parentItemClass}`);
            if(!parent.classList.contains(_errorWrapperClass)){
                parent.classList.add(_errorWrapperClass);
                parent.insertAdjacentHTML('beforeend',`<small class="${_errorItemClass}">${message}</small>`)
            }

        }
        this.requiredField = function (message,input){
            const inputElement = form.querySelectorAll(`input[${input}]`);
            if(inputElement[0].value.length === 0){
                inputElement.forEach(item => this.errorTemplate(item,message));
            }
        }
        this.validEmail = function (message){
            const pattern = /@/g;
            const emailElement = form.querySelectorAll("input[name='email']");
            if(!emailElement[0].value.match(pattern)){
                emailElement.forEach(item => this.errorTemplate(item,message));
            }
        }
/*        const emailMessage = _elements[1].dataset.req;
        this.validEmail(emailMessage);*/

        this.validPassword = function (message) {
            const allPasswordElement = form.querySelectorAll("input[type='password']");
            const valueArr = Array.from(allPasswordElement).map(element => element.value);
            if(valueArr[0] !== valueArr[1]){
                allPasswordElement.forEach(item => this.errorTemplate(item,message))
            }
        }
        for( let i = 0 ;i<_elements.length ;i++ ){
            const element = _elements[i];
            const emailReq = _elements[1].dataset.req;
            const passwordMessage = element.dataset.password;
            const passwordReq = _elements[2].dataset.req;
            const nameMessage = _elements[0].dataset.req;
            if(passwordMessage){
                this.validPassword(passwordMessage);
                this.requiredField(passwordReq, "type='password'");

            }
            if(emailReq){
                this.requiredField(emailReq,"name='email'");
                this.validEmail(emailReq);
            }
            if(nameMessage){
                this.requiredField(nameMessage, "name='username'")
            }
        }
    }
}
const form = new FormValidate(document.querySelector('#form'));
