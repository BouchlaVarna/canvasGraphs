const button = document.querySelector('#drawCircles')
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
let circles = [];
let numberOfCircle = 0;
let line = 1;
let lastCircle = false;

class Circle {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    getCircle() {
        return this;
    }
}

const drawCircle = () => {
    let currCircle = new Circle(50, 50, 25, 'blue');

    ctx.fillStyle = `${currCircle.color}`;
    ctx.beginPath();

    if(circles.length != 0) {
        if((currCircle.x += circles[numberOfCircle-1].x + 100) > canvas.width) {
            line++;
            currCircle.x = 50;
            lastCircle = true;
        } else {
            currCircle.x += circles[numberOfCircle-1].x + 100;
        }
    }

    currCircle.y *= line;

    if(circles.length >= 1) {
        let startingCirlce = numberOfCircle - 1;
        drawLine(circles[startingCirlce].x, circles[startingCirlce].y, currCircle.x, currCircle.y)
    }

    if (lastCircle = true) {
        ctx.arc(currCircle.x, currCircle.y, currCircle.r, 0, 2 * Math.PI);
    }

    ctx.fill();
    ctx.stroke();

    numberOfCircle++;
    circles.push(currCircle);
}

const drawLine = (startX, startY, endX, endY) => {
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

button.onclick = () => drawCircle();