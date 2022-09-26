/*
Создать сущность человека, который будет содержать свойства “имя” и “возраст”. А также иметь метод вывода данных объекта*/
function Human () {
    this.getHuman = function (name, age) {
        name = prompt('Введите имя :');
        age = prompt('Введите возраст : ');
        this.name = name;
        this.age = age;
    }
    this.showProp = function (){
        console.log(`Имя : ${this.name} | Возраст : ${this.age}`);
    }
}
const user = new Human();
user.getHuman();
/*
Создать сущность автомобиля. Она должна содержать минимум 3 характеристики. А также иметь метод вывода на экран данных об этом автомобиле. И метод присвоение этого автомобиля владельцу (метод должен записать в автомобиль объект владельца)*/
function Car (){
    this.getCar = function (autoModel,year,horses) {
        autoModel = prompt('Введите марку машины : ');
        year = prompt('Введите год выпуска машины : ');
        horses = prompt('Введите сколько лошадиных сил в машине : ');
        this.autoModel = autoModel;
        this.year = year;
        this.horses = horses;
    }
    this.setOwner = function (human){
        this.owner = human;
    }
    this.showProp = function (){
        console.log(`Марка автомобиля : ${this.autoModel} | Год выпуска : ${this.year} | Лошадиные силы : ${this.horses} `);
        console.log(`Имя владельца : ${this.owner.name} | Возраст : ${this.owner.age}`);
    }
}
const car = new Car();
car.setOwner(user);
car.getCar();
car.showProp();



