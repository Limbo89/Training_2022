// x = "sort";
// z = x == "sort" ? 1 : 0;
// console.log(z);

let mass = [1, 2, 3, 4, 5, 6];

// for (i = 0; i < mass.length; i++) {
//     console.log(mass[i]);
// };

// for (elem in mass) {
//     console.log(elem); // индексы элементов массива
// };

// for (elem of mass) {
//     console.log(elem); // элементы элементов массива
// };

// mass.forEach((elem, key) => {
//     console.log(elem, key);
// });

// let fruits = [ "Orange", "kek" ,"Mango", "Apple", "Banana"];
// // fruits.sort().reverse();

// fruits.sort((data, data1) => {
//     console.log(data, data1, data.length - data1.length);
//     return data.length - data1.length;
// });
// console.log(fruits);

// let height = [160, 162, 178, 152, 168, 173, 176, 170];

// height.sort((a, b) => {
//     return a - b;
// });
// console.log(height);

let people = [
    { name: "Миша", age: 23 },
    { name: "Вася", age: 44 },
    { name: "Саша", age: 2 },
    { name: "Рома", age: 23 },
    { name: "Ашот", age: 19 }
];

people.sort((a,b) => {
    let age =  a.age > b.age ? 1 : -1;
    let name = a.name < b.name ? -1 : 1;
    console.log(age + name);
    return age - name;
});
console.log(people);