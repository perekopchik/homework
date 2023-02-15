class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}
const form = document.querySelector('.form');
class TextElement extends FormElement {
    TextElement(){
        form.insertAdjacentHTML('beforeend',`<input class="${this.name}" type="${this.type}" placeholder="${this.value}">`)
    }
}
class CheckboxElement extends FormElement {
    CheckboxElement(){
        form.insertAdjacentHTML('beforeend', `<input class="${this.name}" type="${this.type}" ${this.value}>`);
    }

}
class ButtonElement extends FormElement {
    ButtonElement(){
        form.insertAdjacentHTML('beforeend',`<button class="${this.name}" type="${this.type}">REGISTER</button>`)
    }
}
const nameElement = new TextElement('name','text','Your name');
const emailElement = new TextElement('email','text','Your email');
const passwordElement = new TextElement('password','password','Password');
const password1Element = new TextElement('password1','password','Repeat your password');
const checkboxElement = new CheckboxElement('checkbox','checkbox','');
const buttonElement = new ButtonElement('register','submit','');
nameElement.TextElement();
emailElement.TextElement();
passwordElement.TextElement();
password1Element.TextElement();
checkboxElement.CheckboxElement();
buttonElement.ButtonElement();