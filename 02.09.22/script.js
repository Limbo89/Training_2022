// import { hello, test } from "./test.js";
// import * as test from "./test.js"


// console.log(test.test);

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d'); // контекст выполнения
function cords() {
    canvas.addEventListener("click", (e) => {
        let cord = [];
        const rect = canvas.getBoundingClientRect();
        let posX = e.clientX - rect.left;
        let posY = e.clientY - rect.top;
        cords.push(posX);
        cords.push(posY);
        return cord
    });
}
document.querySelector("#round").addEventListener("click", () => {

});
document.querySelector("#kvadrat").addEventListener("click", () => {
    console.log(cords());
    // ctx.fillRect(20, 20, 120, 120);
});