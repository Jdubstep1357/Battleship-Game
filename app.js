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

// flip refers to function
flipButton.addEventListener('click', flip)


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
createBoard('aqua', 'computer')


// Creating ships
class Ship {
    /* Constructor a method of a class for creating 
    and initializing an object of that class
    */
    constructor(name, length) {
        this.name = name
        this.length = length
    }
}

const destroyer = new Ship ('destroyer', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]


function addShipPiece(ship) {
    // selects all divs with id of computer
    const allBoardBlocks = document.querySelectorAll('#computer div')
    // returns true or false
    let randomBoolean = Math.random() < 0.5
    
    let isHorizontal = randomBoolean
    /* gives a number from 1 to 99, ie to select 
    specific number of div on board for placement */
    let randomStartIndex = Math.floor(Math.random() * width * width)

    // makes sure ships arent out of bounds
    // ? and : are boolean similar to php
    let validStart = isHorizontal ? randomStartIndex <= width * width - ship.length ? 
    randomStartIndex : width * width - ship.length :
    // handle vertical
    randomStartIndex <= width * width - width * ship.length ? randomStartIndex : 
        randomStartIndex - ship.length * width + width

    let shipBlocks = []

    for(let i = 0; i < ship.length; i++) {
        if(isHorizontal) {
            // displays next part of 'ship' until it executes ship length
            // ie no ship with ten tiles
            shipBlocks.push(allBoardBlocks[Number(validStart) + i])
        } else {
            // CHECKS IF IT IS VERTICAL
            shipBlocks.push(allBoardBlocks[Number(validStart) + i * width])
        }
    }


    // every() executes a function for each array element. 
    // Returns true if function returns true for all elements
    let valid
    // stops blocks from overlapping
    if (isHorizontal) {
        // _shipBlock means loop for every shipBlock
        valid = shipBlocks.every((_shipBlock, index) => 
        shipBlocks[0].id % width !== width - (shipBlocks.length - (index + 1)))
    } else {
        valid = shipBlocks.every((_shipBlock, index) => 
            shipBlocks[0].id < 90 + (width * index + 1)
        )
    }

    // Account for if space is taken or not
    const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains('taken'))

        if(valid && notTaken) {
        // DISPLAYS EACH SHIP ONTO GRID
        shipBlocks.forEach(shipBlock => {
            shipBlock.classList.add(ship.name)
            shipBlock.classList.add('taken')
        })
    } else {
        // continue to run until ship space not taken
        addShipPiece(ship)
    }


}

ships.forEach(ship => addShipPiece(ship))