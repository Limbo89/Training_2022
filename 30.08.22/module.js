let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d'); // контекст выполнения
function sliceData(arr, index) {
    let data;
    if (arr.length > index) {
        data = arr.slice(-index);
    } else {
        data = arr.slice();
    }
    return data;
}

// написать функцию, которая на вход принимает массив данных для графика вида: [60, 80, 120] и рисует диаграмму
// на основе этих данных.Формат диаграммы приведен на картинке.
// Максимальное количество входных значений - 10. Если присутствует больше значений в массиве, брать только последние 10.
let barParams = {
    "width": 40,
}
function drawGraph(items) {
    let currentBarX = 60;
    let currentBarY = canvas.height - 42;
    let currentTextX = currentBarX + 8;
    let currentTextY = currentBarY + 22;
    ctx.font="14px Tahoma";
    ctx.lineWidth = 3.0;
    ctx.beginPath();
    ctx.moveTo(35, 40);
    ctx.lineTo(25, 55);
    ctx.moveTo(35, 40);
    ctx.lineTo(45, 55);
    ctx.moveTo(35, 40);
    ctx.lineTo(35, canvas.height - 40);
    ctx.lineTo(canvas.width, canvas.height - 40);
    ctx.lineTo(canvas.width - 12, canvas.height - 50);
    ctx.moveTo(canvas.width, canvas.height - 40);
    ctx.lineTo(canvas.width - 12, canvas.height - 30);
    ctx.stroke();
    for(let i = 0; i < 6; i++) { 
        ctx.fillText((5 - i) * 20 + "", 0, i * 40 + 60); 
        ctx.beginPath(); 
        ctx.moveTo(27.5, i * 40 + 60); 
        ctx.lineTo(42.5, i * 40 + 60); 
        ctx.stroke(); 
    }
    ctx.font="18px Tahoma";
    for (let item of items) {
        ctx.fillStyle = 'orange';
        ctx.fillRect(currentBarX, currentBarY, barParams.width, -item * 2);
        ctx.fillStyle = 'black';
        ctx.fillText(String(item), currentTextX, currentTextY);
        currentBarX += 70;
        currentTextX += 70;
    }
}
export { sliceData, drawGraph } 
