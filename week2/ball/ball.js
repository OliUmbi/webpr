
const radius = 10;
const ball = {x:20, y:20, dx: 5, dy: 9};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard(canvas);
        display(context);
    }, 1000 / 20);
}

function nextBoard(canvas) {
    // keep old ball values for the sake of efficient clearing of the old display
    old.x = ball.x;
    old.y = ball.y;

    ball.dy += 1;

    ball.x = old.x + ball.dx;
    ball.y = old.y + ball.dy;

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    if (ball.x < radius || ball.x > canvas.width - radius) {
        ball.dx *= -0.80;
        ball.x = old.x + ball.dx;
    }

    if (ball.y < radius || ball.y > canvas.height - radius) {
        ball.dy *= -0.80;
        ball.y = old.y + ball.dy;
    }

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance
}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


