import * as Mymodule from "./create_user.js";
let view_user = document.querySelector(".view_user");
let div = document.querySelector(".card");
let createUser_btn = document.querySelector("#create_user");
let user;
createUser_btn.addEventListener('click', () => {
    let age = Number(document.querySelector("#age").value);
    let name = document.querySelector("#name").value;
    user = new Mymodule.user(name, age);
    let colorName = document.querySelector("#colorName").value;
    let colorAge = document.querySelector("#colorAge").value;
    if (colorName !== "") {
        user.set_colorName(colorName)
    }
    if (colorAge !== "") {
        user.set_colorAge(colorAge)
    }
    console.log(user);
    clear_inputs()
});
view_user.addEventListener("click", () => {
    user.view(div);
});
function clear_inputs() {
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
};
// user.change_age(50);
// console.log(user);
// console.log(user);
// user.set_colorName("red");
// console.log(user.get_colorName());
// console.log(user.get_colorAge());
// console.log(user.get_headerImage());

// В этом задании нужно создать карточку персонажа или пользователя. соответственно карточка персонажа будет выводиться на Canvas, а для пользователя как блок в HTML DOM.

// 0. Создать модуль create_user или create_character (в зависимости от того, какую тему вы взяли)
// 1. Внутри модуля сделать конструктор объекта User или Character
// 2. На вход этот модуль принимает следующие значения: Имя, Уровень/возраст, Картинка пользователя (сделать для неё также значение по умолчанию).
// 3. Есть свойство this.card которое является свойством самой карточки для вывода. В себе содержит следующие объект со свойствами: colorName, colorAge, headerImage. Для этого объекта нужно создать геттеры и сеттеры для получения этих свойств
// 4. В конструкторе создать методы для:
// — Изменения имени/возраста или лвл/картинки
// — Метод для изменения this.card
// — Метод для отрисовки карточки в Canvas или DOM (в зависимости от темы)
// 5. Написать страничку, к которой будет подключаться этот модуль. На ней разместить соответствующие кнопки и поля для создания карточки и кнопку для отрисовки карточки. 
