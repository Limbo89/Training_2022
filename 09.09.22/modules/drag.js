import * as mymodule from "../script.js";
const div_current_tasks = document.querySelector(".current");
const div_complete_tasks = document.querySelector(".complete");
let current_task_id;
let cards;

div_complete_tasks.ondragover = allowDrop;
div_current_tasks.ondragover = allowDrop;

function allowDrop(event){
    event.preventDefault();
}

function drag_start(task, cards_data){
    task.ondragstart = drag;
    cards = cards_data;
}

function drag(event){
    current_task_id = Number(event.target.children[5].value);
}
div_complete_tasks.ondrop = drop_done;
div_current_tasks.ondrop = drop_curr;

function drop_curr() {
    cards.uncomplete_card(current_task_id);
    mymodule.renderPage();
}

function drop_done() {
    cards.complete_card(current_task_id);
    mymodule.renderPage();
}
export { drag, drag_start }
// function drag(ball) {
//     ball.onmousedown = function (event) {

//         let shiftX = event.clientX - ball.getBoundingClientRect().left;
//         let shiftY = event.clientY - ball.getBoundingClientRect().top;

//         ball.style.position = 'absolute';
//         ball.style.zIndex = 1000;
//         document.body.append(ball);

//         moveAt(event.pageX, event.pageY);

//         // переносит мяч на координаты (pageX, pageY),
//         // дополнительно учитывая изначальный сдвиг относительно указателя мыши
//         function moveAt(pageX, pageY) {
//             ball.style.left = pageX - shiftX + 'px';
//             ball.style.top = pageY - shiftY + 'px';
//         }

//         function onMouseMove(event) {
//             moveAt(event.pageX, event.pageY);
//         }

//         // передвигаем мяч при событии mousemove
//         document.addEventListener('mousemove', onMouseMove);

//         // отпустить мяч, удалить ненужные обработчики
//         ball.onmouseup = function () {
//             document.removeEventListener('mousemove', onMouseMove);
//             ball.onmouseup = null;
//         };

//     };

//     ball.ondragstart = function () {
//         return false;
//     };
// }
// export { drag }