const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    // TODO Implement this method to update the DOM
    // There are some images you can use in the images directory
    //console.log(outcome);
    document.getElementById('player-one-move__img').src = `images/${moveOne}.png`;
    document.getElementById('player-two-move__img').src = `images/${moveTwo}.png`;
    document.getElementById("player-one-move__name").textContent = moveOne;
    document.getElementById("player-two-move__name").textContent = moveTwo;
    
    document.getElementById("winner-outcome").textContent = outcome;
  };

  const checkPassword = () => {
    getPassword();

  };

  

const getPassword = () => {

  let count = 0

  const input = document.getElementById("password").value.length;
  const progress = document.getElementById("progress");

  let progressValue = input * 5;

  if (progress.value < 100){
    progress.setAttribute("value", progressValue);
  }

  if (progress.value < 40){
      //turn into a function variable 
      const newPara = document.createElement("p");
      const text = document.createTextNode("Should be longer");
      newPara.appendChild(text);
  
      const beforePara = document.getElementById("progress");
      document.body.insertBefore(newPara, beforePara);
  }

  if(input < 8){
    progress.style.accentColor="red";

  }else if(input >= 8 && input < 12){
    progress.style.accentColor="orange";
  }else{
    progress.style.accentColor="blue";

  }

  console.log(input);

  console.log(progress);

 }




const password = document.getElementById("password");
password.addEventListener("input", getPassword);

