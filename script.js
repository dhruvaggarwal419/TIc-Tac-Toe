let turnX = true;
let count = 0;
let msg = document.querySelector(".msg");
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset');
let startBtn = document.querySelector('.play-again');
let msgContain = document.querySelector(".msg-container");
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        addValue(box);
    })
})

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msgContain.classList.add("hide");
}

const startGame = () => {
    resetGame();
}

const disableAll = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

winners = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]
]

const checkWinner = () => {

    for (let win of winners) {
        let val1 = boxes[win[0]].innerText;
        let val2 = boxes[win[1]].innerText;
        let val3 = boxes[win[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                return true;
            }
        }
    }
}

const showWinner = (value) => {
    let string = `Winner is ${value}`;
    msg.innerText = string;
    msgContain.classList.remove("hide");
    disableAll();
}

const showDraw = (value) => {
    let string = `It was Draw! Play Again`;
    msg.innerText = string;
    msgContain.classList.remove("hide");
}

const addValue = (box) => {
    if (turnX == true) {
        box.innerText = 'X'
        box.style.color = 'blue';
        turnX = false;
    } else {
        box.innerText = 'O';
        box.style.color = 'green';
        turnX = true;
    }
    count++;
    let isWinner = checkWinner();
    if (count == 9 && !isWinner) {
        showDraw();
    }
    box.disabled = true;
}

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);