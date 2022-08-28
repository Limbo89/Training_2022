// 1 задание

// let user = {
//     name: "John",
//     years: 30
// };

// function aboba() {
//     let [isAdmin, age = user.years, name = user.name] = ["false"]
//     console.log(name); // John
//     console.log(age); // 30
//     console.log(isAdmin); // false
// }
// aboba()

// 2 задание
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
// 3 задание
// function unzip(arr) {
//     let result = [];
//     let strings = [];
//     let numbers = [];
//     let booleans = [];
//     for (item of arr) {
//         for (elem of item) {
//             if (typeof elem === "string"){
//                 strings.push(elem);
//             }
//             else if (typeof elem === "number"){
//                 numbers.push(elem);
//             }
//             else if (typeof elem === "boolean"){
//                 booleans.push(elem);
//             }
//         }
//     }
//     result.push(strings, numbers, booleans);
//     return result;
// }
// console.log(unzip([['a', 1, true], ['b', 2, false]]));
// console.log(unzip([['a', 1, true], ['b', 2]]));

// 4 задание
function encodingMorse(text) {
    let result = [];
    let morse = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "V": "...-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        ",": '--..--',
        '!': '-.-.--',
    }
    let symbols = [];
    let words = text.toUpperCase().split(" ");
    for (let word of words){
        symbols.push(word.split(""));
    }
    for (let arr_of_symbols of symbols){
        for (let symbol of arr_of_symbols) {
            result.push(morse[symbol]);
        }
    }
    return result.join(" ");;
}
console.log(encodingMorse("Hello, world!!"));
