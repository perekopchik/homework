/*
Создать сущность человека, который будет содержать свойства “имя” и “возраст”. А также иметь метод вывода данных объекта*/
let human = {
    name: '',
    age: 0,
    showProp(){
       console.log(`Name : ${this.name} | Age : ${this.age}`);
    }
}
human.name = prompt('Введите имя : ');
human.age = prompt('Введите возраст :');
human.showProp();

