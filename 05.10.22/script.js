// Задача 1
// class Circle {
//     constructor (x, y, radius){
//         this.posX = x;
//         this.posY = y;
//         this.radius = radius;
//     }
//     square(){
//         return Math.PI*this.radius^2;
//     }
//     moveTo(x, y){
//         this.posX += x;
//         this.posY += y;
//     }
//     changeRadius(r) {
//         this.radius = r;
//     }
// }
// let summ = 0;
// let circles = [];
// for (let i = 1; i<4; i++) {
//     circles.push(new Circle(100*i, 10*i, 50*i));
// }
// circles.forEach(element => {
//     summ += element.square();
// });
// console.log(summ);
// 2 задача
// class Student {
//     constructor(subname, scores) {
//         this.subname = subname;
//         this.scores = scores;
//     }
//     average_score() {
//         let a = 0;
//         this.scores.forEach(element => {
//             a += element;
//         });
//         return a/5;
//     }
// }
// let abobus = new Student ("Губанов", [1,5,3,4,1]);
// console.log(abobus.average_score());

// Некоторая задача имеет название, описание, дату начала и дату окончания. Любая задача может иметь набор дочерних подзадач. Создайте класс для представления задачи. Выполняемая задача – наследник задачи с дополнительными свойствами: - процент выполнения (число); - флаг задача завершена. Реализуйте данное наследование.

// Ваша задача - Выпускной
// Описание задачи:
// Окунитесь в атмосферу праздника.
// Начало: не задано, окончание: не задано
// Процент выполнения: 87%
// Задача в процессе

// class Task {
//     constructor(n, d, dStart, dStop) {
//         this.name = n;
//         this.description = d;
//         this.date_start = dStart;
//         this.date_stop = dStop;
//     }
// }
// class CurrentTask extends Task {
//     constructor(n, d, dStart, dStop, p) {
//         super(n, d, dStart, dStop);
//         this.percent = p;
//         if (p < 100) {
//             this.status = "В процессе";
//         } else {
//             this.status = "Выполено"
//         }
//     }
// }

// let a = new CurrentTask("Выжить", "Шо делать если каждый день по 4 пары?", "01.03.22", "01.12.22", 0);
// console.log(a);

// Объявите класс "Прямоугольник" с полями: x1, y1, x2, y2 (координаты левого верхнего и 
//     правого нижнего углов) и методами: пересечься с другим прямоугольником, проверить, 
//     попадает ли точка в данный прямоугольник, масштабировать при условии неподвижности 
//     верхнего левого угла, передвинуть по плоскости без вращения.

class Rectangle {
    constructor(x1, y1, x2, y2) {
        this.leftTop_corner = {
            "x":x1,
            "y":y1,
        }
        this.rightBottom_corner = {
            "x":x2,
            "y":y2,
        }
    }
    // Готово
    meet_rectangle(rect) {
        this.rightBottom_corner = rect.rightBottom_corner;
    }
    // по x должна быть больше левого и меньше правого
    // по y должна быть меньше левого и больше правого
    // ИЛИ РАВНО 
    // Готово
    target(point) {
        if (point.x >= this.leftTop_corner.x && point.x <= this.rightBottom_corner.x && point.y <= this.leftTop_corner.y && point.y >= this.rightBottom_corner.y) {
            console.log("Точка попадает в прямоугольник!");
            return true;
        } else {
            console.log("Точка не попадает в прямоугольник!");
            return false;
        }
    }
    // Готово
    scale(k) {
        this.rightBottom_corner.x = this.rightBottom_corner.x * k;
        this.rightBottom_corner.y = this.rightBottom_corner.y * k;
    }
    // Готово
    move(x, y) {
        if (x) {
            this.leftTop_corner.x += x;
            this.rightBottom_corner.x += x;
        }  
        if (y) {
            this.leftTop_corner.y += y;
            this.rightBottom_corner.y += y;
        }

    }
}
let first = new Rectangle(10, 30, 40, 10);
let second = new Rectangle(20, 20, 30, 10);

// Проверка перемещения по плоскости
// console.log(first);
// first.move(50, 20);
// console.log(first);

//Проверка масштабирования
// console.log(first);
// first.scale(2);
// console.log(first);

// Проверка попаданния точки
// let point = {
//     "x": 25,
//     "y": 15
// }
// first.target(point);

// Проверка пересечения
// console.log(second);
// second.meet_rectangle(first)
// console.log(second);