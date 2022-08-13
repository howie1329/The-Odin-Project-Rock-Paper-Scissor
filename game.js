const computer_hand = ['rock','paper','scissors']
let wins = 0
let lose = 0
let tie = 0

function playerSelection(params) {
    return String(prompt('What is your move: Rock, Paper, Scissor'))
}

function random_hand(min = 0, max = 2) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

function getComputerChoice(params) {
    random_number = random_hand()
    return computer_hand[random_number]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            tie ++
            return 'Tie Game'
        } else if (computerSelection === 'paper'){
            lose ++
            return 'Computer Wins'
        } else if (computerSelection === 'scissors'){
            wins ++
            return 'Player Wins'
        }
    }else if (playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            wins ++
            return 'Player Wins'
        } else if (computerSelection === 'paper'){
            tie ++
            return 'Tie Game'
        } else if (computerSelection === 'scissors'){
            lose ++
            return 'Computer Wins'
        }
    } else if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            lose ++
            return 'Computer Wins'
        } else if (computerSelection === 'paper'){
            wins ++
            return 'Player Wins'
        } else if (computerSelection === 'scissors'){
            tie++
            return 'Tie Game'
        }
    }
}

function game(params) {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection(),getComputerChoice()))
        console.log('Wins: ' + wins)
        console.log('Loses: ' + lose)
        console.log('Tie: ' + tie)
    }
    if (wins > lose){
        console.log('Player Wins Game')
    } else if (lose > wins){
        console.log('Computer Wins Game')
    }else{
        console.log('Tie')
    }
}

game()