document.addEventListener("DOMContentLoaded", () => {
    // CHECK FOR WIN
    //// write out all possible combinations for a win
    //// write out all possible combinations for a tie
    //// capture gameboard elements
    //// see if current gameboard element methods match either win or tie conditions
    ////// if true: return relevant message to message div
    ////// disable clicks on gameboard
    ////// re-set game board
    ////// else if: allow for play

    // on gameTile click toggle X or O
    let gameTiles = document.querySelectorAll(".gameTile")
    
    // user is able to click on different squares to make a move
    // ever click will alternate between marking x and o
    gameTiles.forEach(() => {
        addEventListener("click", (event) => {
            // UPDATE:
            //// toggle every other click to be X or O
            //// once innerHTML is set disable further click events from happening on tile
            //// if clicked:
            ///// add a class that includes relevant styling for player X vs player O
            let currentStatus = event.target.innerText;
            let newPlayStatus = currentStatus == "X" ? "O" : "X"
            event.target.innerHTML = newPlayStatus;
    })})

    // RESET BUTTON
    //// capture reset button
    /// if reset button is clicked reset game board

    // DISPLAY MESSAGE
    //// add a blank div to gameboard
    //// if there is a winner, message the winner congratulations
    //// else if X has just been played display a message indicating next player is O
    //// else have next player be X
})