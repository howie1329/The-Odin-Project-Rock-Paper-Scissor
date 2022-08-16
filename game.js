const computer_hand = ['rock','paper','scissors']
let wins = 0
let lose = 0
let tie = 0
let computermove

function playerSelectionRock(params) {
    return 'rock'
}
function playerSelectionPaper(params) {
    return 'paper'
}
function playerSelectionScissor(params) {
    return 'scissors'
}

function random_hand(min = 0, max = 2) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

function getComputerChoice(params) {
    random_number = random_hand()
    computermove = computer_hand[random_hand]
    return computer_hand[random_number]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            document.getElementById('computermove').textContent = 'Computer Move: Rock'
            document.getElementById('gamestatus').textContent = 'TIE GAME!'
            tie ++
            return 'Tie Game'
        } else if (computerSelection === 'paper'){
            document.getElementById('computermove').textContent = 'Computer Move: Paper'
            document.getElementById('gamestatus').textContent = 'YOU LOSE!'
            lose ++
            return 'Computer Wins'
        } else if (computerSelection === 'scissors'){
            document.getElementById('computermove').textContent = 'Computer Move: Scissors'
            document.getElementById('gamestatus').textContent = 'YOU WIN!'
            wins ++
            return 'Player Wins'
        }
    }else if (playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            document.getElementById('computermove').textContent = 'Computer Move: Rock'
            document.getElementById('gamestatus').textContent = 'YOU WIN!'
            wins ++
            return 'Player Wins'
        } else if (computerSelection === 'paper'){
            document.getElementById('computermove').textContent = 'Computer Move: Paper'
            document.getElementById('gamestatus').textContent = 'TIE GAME!'
            tie ++
            return 'Tie Game'
        } else if (computerSelection === 'scissors'){
            document.getElementById('computermove').textContent = 'Computer Move: Scissors'
            document.getElementById('gamestatus').textContent = 'YOU LOSE!'
            lose ++
            return 'Computer Wins'
        }
    } else if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            document.getElementById('computermove').textContent = 'Computer Move: Rock'
            document.getElementById('gamestatus').textContent = 'YOU LOSE!'
            lose ++
            return 'Computer Wins'
        } else if (computerSelection === 'paper'){
            document.getElementById('computermove').textContent = 'Computer Move: Paper'
            document.getElementById('gamestatus').textContent = 'YOU WIN!'
            wins ++
            return 'Player Wins'
        } else if (computerSelection === 'scissors'){
            document.getElementById('computermove').textContent = 'Computer Move: Scissors'
            document.getElementById('gamestatus').textContent = 'TIE GAME!'
            tie++
            return 'Tie Game'
        }
    }
}

function game(player,computer) {
    console.log(playRound(player,computer))
    console.log('Wins: ' + wins)
    console.log('Loses: ' + lose)
    console.log('Tie: ' + tie)
    document.getElementById('playerwins').textContent = 'Wins: ' + wins 
    document.getElementById('gameties').textContent = 'Tie: ' + tie
    document.getElementById('computerwins').textContent = 'Loses: ' + lose


}



const rockbtn = document.querySelector('.rockbutton')
const paperbtn = document.querySelector('.paperbutton')
const scissorbtn = document.querySelector('.scissorbutton')
const resetbtn = document.querySelector('.reset')

rockbtn.addEventListener('click', () =>{
    game(playerSelectionRock(),getComputerChoice())
})

paperbtn.addEventListener('click', () =>{
    game(playerSelectionPaper(),getComputerChoice())
})

scissorbtn.addEventListener('click', () =>{
    game(playerSelectionScissor(),getComputerChoice())
})

resetbtn.addEventListener('click', () =>{
    wins = 0
    lose = 0
    tie = 0
    document.getElementById('playerwins').textContent = 'Wins: ' + wins 
    document.getElementById('gameties').textContent = 'Tie: ' + tie
    document.getElementById('computerwins').textContent = 'Loses: ' + lose
    document.getElementById('computermove').textContent = 'COMPUTER IS THINKING...'
    document.getElementById('gamestatus').textContent = ' '
})