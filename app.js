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

// whatever color is passed into createBoard() will be shown
function createBoard(color, user) {
    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color
    gameBoardContainer.id = user

    // Creates 100 blocks ie spaces for players to hit or miss
    for (let i = 0; i < width * width; i++) {
        const block = document.createElement('div')
        // Allows styling of .block in styles.css
        block.classList.add('block')
        block.id = i
        gameBoardContainer.append(block)
    }

    // Takes takes above created div in javascript into index.html
    //gamesBoardContainer is referenced on line 1
    gamesBoardContainer.append(gameBoardContainer)
}

createBoard('yellow', 'player')
createBoard('blue', 'computer')

// flip refers to function
flipButton.addEventListener('click', flip)




