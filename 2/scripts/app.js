document.addEventListener("DOMContentLoaded", () => {
    // on gameTile click toggle X or O
    let gameTiles = document.querySelectorAll(".gameTile")
    
    gameTiles.forEach(() => {
        addEventListener("click", (event) => {
            let currentStatus = event.target.innerText;
            let newPlayStatus = currentStatus == "X" ? "O" : "X"
            event.target.innerHTML = newPlayStatus;
    })})
})