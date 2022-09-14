import * as drag_module from "modules/drag.js";
import * as task_module from "./modules/create_task.js";

let card = task_module.task("title123", "udgasfhoasdfg");
console.log(card);

// var balls = document.querySelectorAll('#ball');
// for (let ball of balls){
//     drag_module.drag(ball)
//     ball.addEventListener("mousedown", ()=>{
//         drag_module.drag(ball);
//     });
// }
