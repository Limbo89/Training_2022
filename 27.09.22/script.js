// class Orange {
//     constructor(radius=5){
//         this.name = "Апельсин";
//         this.rad = radius;
//     } // при создании constructor вызывается автоматически

//     fall() {
//         return this.name + " упал";
//     } // метод класса

//     volume() {
//         return Math.floor(4/3*Math.PI*this.rad);
//     }

// }; // конструктор

// let or1 = new Orange(); // Экзепляр
// let or2 = new Orange(7.5); // Экзепляр

// console.log(or1.name); // Вызов свойства
// console.log(or2.volume()); // Вызов метода

// class warrior {
//     constructor() {
//         this.health = 100;
//         this.atk = 20;
//     }
//     attack(warr) {
//         warr.hp -= this.atk;
//         console.log(`Воин ${waee.name} получил по жопе от ${this.name}
//         `);
//     }
// };
// let warrior1 = new warrior();
// let warrior2 = new warrior();
// fight(warrior1, warrior2)
// function fight(warr1, warr2) {
//     while (true) {
//         let who_atack = Math.random();
//         if (who_atack < 0.5) {
//             warr1.health = warr1.health - warr2.atk;
//             console.log("воин под номером 1 атакует! *херакс* хп противника:" + warr1.health);
//         } else {
//             warr2.health = warr2.health - warr1.atk;
//             console.log("воин под номером 2 атакует! *херакс* хп противника:" + warr2.health);
//         }
//     }
// }