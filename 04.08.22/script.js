// this не работает из под анонимных функций

// OBJECT.function({
    //console.log(this);
    // this тот самый object
// })
// function test(a) {
//     return a * 10
// }

// function test1(a) {
//     return a + a
// }

// function compile(data, f1, f2){
//     if(typeof(data) == "number"){
//         return f1(data);
//     } else {
//         return  f2(data)
//     }
// }

// console.log(compile(1231, test, test1));
// console.log(compile("ten", test, test1));

function nalog_russia(money){
    if (money < 12000){
        return money
    } else {
        return nalog = money/100*13; 
    }

}
function nalog_norvegy(money){
    if (money < 12000){
        return money
    } else if (money <= 100000) {
        return nalog = money/100*10; 
    } else {
        return nalog = money/100*33; 
    }

}
// console.log(nalog_norvegy(20000));
function giveMoney (money, country, f1, f2){
    if (country == "Норвегия") {
        return f2(money)
    } else if (country == "Россия") {
        return f1(money)
    }
}

console.log(giveMoney(1000, "Россия", nalog_russia, nalog_norvegy));
console.log(giveMoney(100000, "Россия", nalog_russia, nalog_norvegy));
