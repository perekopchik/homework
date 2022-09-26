/*
Создать сущность автомобиля. Она должна содержать минимум 3 характеристики. А также иметь метод вывода на экран данных об этом автомобиле. И метод присвоение этого автомобиля владельцу (метод должен записать в автомобиль объект владельца)*/
let car = {
    autoModel: '',
    year: 0,
    horses:0,
    showProp(){
        console.log(`Марка автомобиля : ${this.autoModel} | Год выпуска : ${this.year} | Лошадиные силы : ${this.horses} `);
        console.log(`Имя владельца : ${this.name} | Фамилия владельца : ${this.surname} | Возраст : ${this.age}`);
    },
    /*getOwner(){
      car.owner = {};
      car.owner.name = prompt('Введите Имя :');
      car.owner.surname = prompt('Введите Фамилию : ');
      car.owner.age = prompt('Введите Возраст : ');
    },*/
    getOwn : function (name,surname,age){
        name = prompt('Введите Имя :');
        surname = prompt('Введите Фамилию : ');
        age = prompt('Введите Возраст : ');
    this.name = name;
    this.surname = surname;
    this.age = age;
}
};
/*car.autoModel = prompt('Введите марку машины : ');
car.year = prompt('Введите год выпуска машины : ');
car.horses = prompt('Введите сколько лошадиных сил в машине : ');*/
let showProp = car.showProp.bind(car);
const Owner = new car.getOwn();
console.log(Owner);
console.log(car);
/*car.getOwner();*/
showProp();

