/////////////HANGMAN - GUESSING WORD JSON///////////////////////////////////////
const wordState = document.getElementById('word-state');
const dictionary = ['apple', 'papaya', 'durian', 'indonesia', 'pie', 'star', 'next', 'academy'];
let wordToGuess = dictionary[Math.floor(Math.random() * dictionary.length)];
const lives = document.getElementById('choices-left');
const inputSubmit = document.getElementById('inputform');
const inputForm = document.getElementById('answerhere');
const guessedList = document.getElementById('guessedlist');

let currentGuesses = []
let livesLeft = 5;


for (let i = 0; i < wordToGuess.length; i++) {
    currentGuesses.push('_');
}
wordState.innerHTML = currentGuesses.join(' ');
lives.innerHTML = ' ' + livesLeft + ' ';

inputSubmit.onsubmit = function (event) {
    event.preventDefault();
    if (livesLeft >= 1) {
        addAttempts();
        if (livesLeft >= 1 && !currentGuesses.includes('_')) {
            alert('WINNER');
            location.reload();
            // resetBtn.classList.remove('hidden');
        }
    } else {
        alert('Game is over');
        location.reload();
        // resetBtn.classList.remove('hidden');
    }
}

function addAttempts() {
    let ul = document.createElement('ul');
    ul.innerHTML = inputForm.value

    if (inputForm.value == '') {
        alert('Empty string! Try again.');
    } else if (wordToGuess.includes(inputForm.value)) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] == inputForm.value) {
                currentGuesses[i] = inputForm.value;
                wordState.innerHTML = currentGuesses.join(' ')
            }
        }
        guessedList.appendChild(ul);
        inputForm.value = '';
    } else {
        livesLeft -= 1;
        if (livesLeft == 0) {
            alert('GAME OVER');
            location.reload();
            // resetBtn.classList.remove('hidden');
        }
        lives.innerHTML = ' ' + livesLeft + ' ';

    }

    guessedList.appendChild(ul);
}
console.log(wordToGuess);
/////////////HANGMAN - GUESSING WORD JSON///////////////////////////////////////


//////////////// TIC TAC TOE GAME /////////////////////////////////////////////////////////
const xWin = document.getElementById('resultx');
const Draw = document.getElementById('draw');
const oWin = document.getElementById('resulto');
let xWinCount = 0;
let drawCount = 0;
let oWinCount = 0;
xWin.innerHTML = xWinCount;
Draw.innerHTML = drawCount;
oWin.innerHTML = oWinCount;
const boxes = document.getElementsByClassName('square');
let turn = 0
for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i]
    box.onclick = function () {
        if (box.innerHTML == "" && !isWon()) {
            box.innerHTML = giveSymbol()
            if (isWon()) {
                alert(giveSymbol() + ' WON')
                xWinCount += 1;
                xWin.innerHTML = xWinCount;
                reset();
            } else if (!isWon() && turn == 8) {
                alert('DRAW')
                drawCount += 1;
                Draw.innerHTML = drawCount;
                reset();
            }
            // do check in here
            turn++
            if (!isWon() && !isTie()) {
                botMove();
            }
        }
    }
}

function giveSymbol() {
    if (turn % 2 == 0) {
        return "X"
    } else {
        return "O"
    }
}

function isWon() {
    const winningCondition = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["2", "4", "6"],
        ["0", "4", "8"]
    ]
    for (let i = 0; i < winningCondition.length; i++) {
        const condition = winningCondition[i];
        if (boxes[condition[0]].innerHTML == boxes[condition[1]].innerHTML && boxes[condition[0]].innerHTML == boxes[condition[2]].innerHTML && boxes[condition[0]].innerHTML != "") {
            return true
        }
    }
    return false
}

function isTie() {
    if (!isWon() && turn == 8) {
        return true
    } else {
        return false
    }
}

function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = ""
    }
    turn = 0;
}

function botMove() {
    let index = giveRandomIndex()
    while (boxes[index].innerHTML != "") {
        index = giveRandomIndex()

    }
    boxes[index].innerHTML = giveSymbol()
    if (isWon()) {
        alert("O won")
        oWinCount += 1;
        oWin.innerHTML = oWinCount;
        reset();
    } else if (!isWon() && isTie()) {
        alert("Draw")
        drawCount += 1;
        Draw.innerHTML = drawCount;
        reset();
    } else {
        turn++
    }
}

function giveRandomIndex() {
    return Math.floor(Math.random() * boxes.length)
}