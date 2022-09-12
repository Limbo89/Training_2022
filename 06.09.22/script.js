// let student = {
//     firstName: "Дима",
//     class: 10,
//     get fullInfo(){
//         return `Ученик ${this.firstName} учится в ${this.class} классе`
//     },
//     set changeClass(newClass) {
//         if (newClass < 1 || newClass > 11) {
//             console.log("низя");
//             return
//         }
//         this.class = newClass;
//         console.log("Добро пожаловать");
//     },
    // get age(){
    //     return this._age;
    // },
    // set age(val){
    //     if(val < 5 || val > 18) {
    //         console.log("Тикай на завод");
    //         return;
    //     }
    //     this._age = val;
    // },

// }
// // console.log(student.fullInfo);
// // student.changeClass = 1;
// // console.log(student);
// student.age = 15;
// console.log(student.age);
// console.log(student);

// Задача:

// Написать объект User со свойствами:
// Login
// Password
// Age

// Сделать проверку для установления значений:
// Недопустимый логин, если он короче 4 символов
// Пароль должен быть от 8 до 16 символов
// Возраст: Старше 5 лет
// let user = {
//     get login(){
//         return this._login;
//     },
//     set login(val){
//         if(val < 4) {
//             console.log("Недопустимый логин, если он короче 4 символов");
//             return;
//         }
//         this._login = val;
//     },
//     get password(){
//         return this._password;
//     },
//     set password(val){
//         if(val < 8 || val < 16) {
//             console.log("Пароль должен быть от 8 до 16 символов");
//             return;
//         }
//         this._password = val;
//     },
//     get age(){
//         return this._age;
//     },
//     set age(val){
//         if(val < 5) {
//             console.log("Возраст: Старше 5 лет");
//             return;
//         }
//         this._age = val;
//     },
// }
// user.age = 123;
// user.password = "asefbhijou";
// user.login = "ghuiosdfa";
// console.log(user);

// function Student(name1, class1) {
//     this.name = name1;
//     this.class = class1;
// }
// let student1 = new Student("Слыш ублюдок ты ебаный", 2);
// console.log(student1);
// Ghaechka — Сегодня, в 19:46
// Задача 2

// Написать функцию-конструктор объекта для прямоугольника. На вход принимаются данные ширины, высоты и положения.
// Укажите внутри конструктора проверку размера: если размер отрицательный, то значения для него устанавливаются 0,0

// Также опишите внутри конструктора методы, которые выводят периметр и площадь этого прямоугольника.
function pryamougolnik(height_, width_, position_) {
    if (width_ < 1) {
        this.width = 0,0;
    } else {
        this.width = width_;
    }
    if (height_ < 1) {
        this.height = 0,0;
    } else {
        this.height = height_;
    }
    this.position = position_;
    this.area = function (){
        return width_ * height_;
    }
    this.perimetr = function (){
        return 2*(width_ + height_);
    }
}
let a = new pryamougolnik(100, -100, [123, 57934]);
console.log(a.area());
console.log(a.perimetr());
console.log(a);