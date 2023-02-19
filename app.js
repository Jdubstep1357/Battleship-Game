const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector('#flip-button')


// Option choosing
let angle = 0
function flip() {    
    const optionShips = Array.from(optionContainer.children)
    angle = angle === 0 ? 90: 0
    // CSS IN JAVASCRIPT ON CLICK
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}


// Creating Boards
const width = 10

function createBoard() {
    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = 'pink'

    // Takes takes created div in javascript into index.html
    //gamesBoardContainer is referenced on line 1
    gamesBoardContainer.append(gameBoardContainer)
}

createBoard()

// flip refers to function
flipButton.addEventListener('click', flip)




