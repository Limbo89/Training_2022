// class Table{
//     constructor(l, w, h){
//         this.length = l;
//         this.width = w;
//         this.height = h;
//     };
// };

// class CompuretTabel extends Table{
//     constructor(l, w, h, monitor = 0.0){
//         super(l, w, h); // сначала вызываем super для определения конструктора родителя

//         // создаём свойства дочернего класса
//         this.SquareMonitor = monitor;
//     };
//     square (){
//         return this.width * this.length - this.SquareMonitor;
//     }
// };

// let table = new CompuretTabel(150.5, 62, 54, 150)
// console.log(table.square(150));

// В некой игре-стратегии есть солдаты и герои. У всех есть свойство, содержащее уникальный номер объекта, и свойство, в котором хранится принадлежность команде. У солдат есть метод "иду за героем", который в качестве аргумента принимает объект типа "герой". У героев есть метод увеличения собственного уровня.

// В основной ветке программы создается по одному герою для каждой команды. В цикле генерируются объекты-солдаты. Их принадлежность команде определяется случайно. Солдаты разных команд добавляются в разные списки.

// Измеряется длина списков солдат противоборствующих команд и выводится на экран. У героя, принадлежащего команде с более длинным списком, увеличивается уровень.

// Отправьте одного из солдат первого героя следовать за ним. Выведите на экран идентификационные номера этих двух юнитов.
let id = 0;
class unit {
    constructor(id, team) {
        this.id = id;
        this.team = team;
    }
}
class hero extends unit {
    constructor(id, team) {
        super(id, team);
        this.lvl = 5;
    }
    lvl_up() {
        this.lvl += 10;
    }
}
class soldier extends unit {
    constructor(id, team) {
        super(id, team);
        this.move = "hold";
    }
    go_after_hero(hero) {
        this.move = hero;
    }
}

let black_team = [];
let white_team = [];
function create_heroes() {
    white_team.push(new hero(id++, "white"));
    black_team.push(new hero(id++, "black"));
}
create_heroes()
function create_soldiers() {
    for (let i = 0; i < 10; i++) {
        let rand = Math.random();
        if (rand < 0.5) {
            black_team.push(new soldier(id++, "black"));
        } else {
            white_team.push(new soldier(id++, "white"));
        }
    }
}
create_soldiers()

if (black_team.length > white_team.length) {
    console.log("Белые: " + white_team.length, "Черные: " + black_team.length);
    black_team[0].lvl_up();
    console.log("Герой команды чёрных повышает свой уровень!");
} else {
    console.log("Белые: " + white_team.length, "Черные: " + black_team.length);
    white_team[0].lvl_up();
    console.log("Герой команды белых повышает свой уровень!");
}
black_team[1].go_after_hero(black_team[0]);
console.log(black_team[1]);