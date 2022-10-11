// —   Есть класс Person, конструктор которого принимает три параметра – имя, фамилию и квалификацию специалиста. Квалификация имеет значение заданное по умолчанию, равное единице. Также должно быть свойство worker которое по умолчанию - true (признак работает человек или нет)

//  —   У класса Person есть метод, который возвращает строку, включающую в себя всю информацию о сотруднике.

//  —   Класс Person содержит метод, который увольняет сотрудника (ставит ему worker-false), который выводит на экран фразу "До свидания, мистер …" (вместо троеточия должны выводиться имя и фамилия объекта).

//  —   В основной ветке программы создайте три объекта класса Person. Посмотрите информацию о сотрудниках и увольте самое слабое звено.

//  —   В конце программы добавьте функцию input(), чтобы скрипт не завершился сам, пока не будет нажат Enter. Иначе вы сразу увидите как удаляются все объекты при завершении работы программы.
// get name() {
//     return this._name;
//   }
class Person {
    constructor(name, subname, qualification=1, worker=true) {
        this.name = name;
        this.subname = subname;
        this.qualification = qualification;
        this.worker = worker;
    }
    get full_info(){
        return `Сотрудник: ${this.subname} ${this.name}; Квалификация: ${this.qualification} Статус:${this.worker}`
    }
    dismissed(){
        this.worker = false;
        console.log(this);
    }   
}
let persons = [];
let maks = new Person("Максим", "Губанов", 4);
let Misha = new Person("Миша", "qwerty", 1);
let Petia = new Person("Петя", "qwerty", 10);
persons.push(maks, Misha, Petia);
console.log(maks.full_info);
let slabiy = persons[0];
for (let person of persons){
    if (person.qualification < slabiy.qualification)(
        slabiy = person
    )
}
slabiy.dismissed();