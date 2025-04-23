function guessingGame() {

    let randomNum = Math.floor(Math.random()* 100) ;
    let trys = 0;
    return function closure(guess){
        trys++;
        if (guess === randomNum){
            console.log(`you Won after ${trys} trys. reseting the game in 10 seconds`)
            setTimeout(() => {
                game = guessingGame();
                console.log("new game created")
            },10000)
        } else if(guess < randomNum) {
            console.log(`too low, guess again... guesses so far ${trys}`)
        } else {
            console.log(`too high, guess again... guesses so far ${trys}`)
        }
    };
}

let game = guessingGame();

module.exports = { guessingGame };
