// У нас есть объект:

let user = {
    name: "John",
    years: 30
};

// Напишите деструктурирующее присваивание, которое:

//     свойство name присвоит в переменную name.
//     свойство years присвоит в переменную age.
//     свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

// function aboba() {
//     let [isAdmin, age = user.years, name = user.name] = ["false"]
//     console.log(name); // John
//     console.log(age); // 30
//     console.log(isAdmin); // false
// }
// aboba()

// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// function topSalary(arr){
//     if (salaries === "undefined"){
//         return null;
//     } else {
//         let max = 0;
//         let name;
//         for (let [key, value] of Object.entries(arr)) {
//             if (max < value){
//                 max = value;
//                 name = key;
//             }
//         }
//         return name;
//     }
// }
// console.log(topSalary(salaries));
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// Напишите функцию JavaScript для создания массива массивов, разгруппировав элементы в массиве, созданном zip

// Test Data :
unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Expected Output:
function unzip(arr){
    let data = [];
    for(let i = 0; i<arr.length; i++){
        arrs.push(arr[i]);
    }
}