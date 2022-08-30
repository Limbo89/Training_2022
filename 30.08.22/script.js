let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d'); // контекст выполнения

function line(posStart=[0,0], length=100) {
    // let [x, y] = posStart;
    // ctx.beginPath();
    // ctx.moveTo(x, y);
    // ctx.lineTo(x+length, y);
    // ctx.stroke();
}
// line()

// function triangle(A=[0,0], B=[100, 0], C=[50,50]) {
//     ctx.beginPath();
//     ctx.moveTo(A[0], A[1]);
//     ctx.lineTo(B[0], B[1]);
//     ctx.lineTo(A[0], C[1]);
//     ctx.lineTo(C[0], A[1]);
//     ctx.stroke()
// }
// triangle()

// function kvadrat(A=[0,0], B=[500, 0], C=[500,500], D=[0,500]) {
//     ctx.beginPath();
//     ctx.moveTo(A[0], A[1]);
//     ctx.lineTo(B[0], B[1]);
//     ctx.lineTo(C[0], C[1]);
//     // ctx.lineTo(D[0], D[1]);
//     ctx.closePath();
//     ctx.fill();

// }
// kvadrat()
// вениз, влево вверх
// let start = [50, 50];
// let length = 200;
// let direction = 0;
// function arrow(start, length, direction) {
//     ctx.beginPath();
//     ctx.strokeStyle = "red";
//     ctx.moveTo(start[0], start[1]);
//     if (direction === 0) {
//         ctx.lineTo(length + start[0], start[1]);
//         ctx.lineTo(start[0] + 150, 130);
//         ctx.moveTo(length + start[0], start[1]);
//         ctx.lineTo(start[0] + 150, 260);
//         ctx.stroke();
//     } else if(direction === 1) {
//         ctx.lineTo(length, length * 2);
//         ctx.lineTo(length - 50, 320);
//         ctx.moveTo(length, length * 2);
//         ctx.lineTo(length + 50, 320);
//         ctx.stroke();
//     } else if (direction === 2){
//     }
// }
// arrow([200, 200], 200, 1)