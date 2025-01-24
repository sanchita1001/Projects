let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".item");
const result = document.querySelector("#Result");
const usescore = document.querySelector("#user");
const comscore = document.querySelector("#comp");
let i= usescore.innerText;
let j= comscore.innerText;


choices.forEach((item ) => {
    const userchoice = item.getAttribute("id");

    console.log(item);
    item.addEventListener("click",() => {
        console.log("user choice =",userchoice);

    
   const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const no = Math.floor(Math.random() *3);
   return options[no];
   }
   let compchoice = gencompchoice();
   console.log("computer choice =",compchoice);
   const drawgame = () => {
    result.innerText = "Draw. Play Again";
 }
   if (userchoice === compchoice) {
    drawgame();}
       else if (userchoice === "scissor" && compchoice === "paper" || userchoice === "rock" 
        && compchoice=== "scissor" || userchoice==="paper"&& compchoice==="rock") 
      {result.innerText="Yay! You win";
        usescore.innerText= ++i;
      }
       else {result.innerText="Oops! You loose";
        comscore.innerText= ++j;
       }

    
  

});
});


