import * as Mymodule from "./drag.js"
var balls = document.querySelectorAll('#ball');

for (let ball of balls){
    Mymodule.drag(ball)
    ball.addEventListener("mousedown", ()=>{
        Mymodule.drag(ball);
    });
}
