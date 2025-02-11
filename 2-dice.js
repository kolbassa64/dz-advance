
function randomNumberOnTheDice (n) {
    if((n < 20) && (n > 3) && !(n % 2)) { return Math.round(Math.random() * n) }
    throw new Error('only the right dice');  

}

