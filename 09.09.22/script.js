import * as drag_module from "./modules/drag.js";
import * as task_module from "./modules/create_task.js";
let card;
let crosses;
let ticks;
let cards = new task_module.TaskCards();
let popUp = document.querySelector(".popUp");
let div_current_tasks = document.querySelector(".current");
let div_complete_tasks = document.querySelector(".complete");
document.querySelector(".popUp_button").addEventListener("click", () => {
    let title = document.querySelector(".lable").value;
    let description = document.querySelector(".description").value;
    cards.pushCard(card = new task_module.Card(title, description, false));
    renderPage()
});
function renderPage() {
    cards.view_cards(div_current_tasks, div_complete_tasks);
    let create_task = document.querySelector(".create_task");
    create_task.addEventListener("click", () => {
        popUp.classList.toggle('active');
    });
    crosses = document.querySelectorAll(".cross");
    ticks = document.querySelectorAll(".tick");
    addEvent(crosses, ticks);
    let tasks = document.querySelectorAll('.task');
    for (let task of tasks){
        // drag_module.drag(task)
        task.addEventListener("mousedown", ()=>{
            drag_module.drag_start(task, cards);
        });
    }
}
function addEvent(crosses, ticks) {
    if (crosses.length > 0) {
        for (let cross of crosses) {
            cross.addEventListener("click", (e) => {
                let id = Number(e.target.parentNode.parentNode.children[5].value);
                cards.delete_card(id);
                renderPage();
            })
        }
    }
    if (ticks.length > 0) {
        for (let tick of ticks) {
            tick.addEventListener("click", (e) => {
                let id = Number(e.target.parentNode.parentNode.children[5].value);
                cards.complete_card(id);
                renderPage();
            })
        }
    }

}
document.querySelector(".close_popUp").addEventListener("click", (e) => {
    popUp.classList.toggle('active');
});
renderPage()
export { renderPage }