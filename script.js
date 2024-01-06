let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const GetComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  //Rock , paper, scissor
  const randmIdx = Math.floor(Math.random() * 3);
  return options[randmIdx];
};

const draw = () => {
  console.log("Game was draw");
  msg.innerText = "Game Was Draw, Play Again"
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (UserWin,userchoice,compChoice)=>{
    if(UserWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore
        msg.innerText = `You lost. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
  console.log("User Choice =", userchoice);
  //Generate Computer Choice
  const compChoice = GetComputerChoice();
  console.log("Comp Choice =", compChoice);

  if (userchoice === compChoice) {
    //Draw
    draw();
  } else {
    let UserWin = true;
    if (userchoice === "rock") {
      UserWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      UserWin = compChoice === "scissors" ? false : true;
    } else {
      UserWin = compChoice === "rock" ? false : true;
    }
    showWinner(UserWin,userchoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
