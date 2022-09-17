import * as drag_module from "./modules/drag.js";
import * as task_module from "./modules/create_task.js";
let card;
let cards = new task_module.TaskCards();
let popUp = document.querySelector(".popUp");
let div_current_tasks = document.querySelector(".current");
let div_complete_tasks = document.querySelector(".complete");
// function view_items() {
//     div_current_tasks.innerHTML = '<div class="create_task"><img src="./images/pngegg.png" alt=""></div>';
//     div_complete_tasks.innerHTML = '';
//     complete_tasks.forEach((task) => {
//         div_complete_tasks.innerHTML += `
//         <div class="task">
//             <span class="taskname">${task.title}</span> <br> <br>
//             <span class="tasktext">${task.description}</span>
//             <div class="cross">
//                 <img src="./images/Group_2.png" alt="">
//             </div>
//             <div class="tick">
//                 <img src="./images/Vector_5.png" alt="">
//             </div>
//         </div>
//     `;
//     });
//     current_tasks.forEach((task) => {
//         div_current_tasks.innerHTML += `
//         <div class="task">
//         <span class="taskname">${task.title}</span> <br> <br>
//         <span class="tasktext">${task.description}</span>
//         <div class="cross">
//             <img src="./images/Group_2.png" alt="">
//         </div>
//         <div class="tick">
//             <img src="./images/Vector_5.png" alt="">
//         </div>
//     </div>
//     `;
document.querySelector(".create_task").addEventListener("click", () => {
    popUp.classList.toggle('active');
});

document.querySelector(".popUp_button").addEventListener("click", () => {
    let title = document.querySelector(".lable").value;
    let description = document.querySelector(".description").value;
    cards.pushCard(card = new task_module.Card(title, description, false));
    cards.pushCard(card = new task_module.Card(title, description, true));
    cards.view_cards(div_current_tasks, div_complete_tasks);
    console.log(cards);
});
document.querySelector(".close_popUp").addEventListener("click", () => {
    popUp.classList.toggle('active');
});
// var balls = document.querySelectorAll('#ball');
// for (let ball of balls){
//     drag_module.drag(ball)
//     ball.addEventListener("mousedown", ()=>{
//         drag_module.drag(ball);
//     });
// }