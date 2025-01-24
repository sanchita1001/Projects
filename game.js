let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");


let turnO = true;
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],

];
boxes.forEach ((box) => {
box.addEventListener("click",() =>{

    console.log("box was clicked");
    if (turnO) {
    box.innerText ="O";
    turnO=false

    }
    else {
        box.innerText="X";
        turnO="true";
    }
       box.disabled=true;
       checkwinner();
       reset.addEventListener("click",() => {
        box.disabled=false;
       });
       
} );
});

const checkwinner = () => {
 for (let pattern of winPatterns) {
   console.log(pattern[0],pattern[1],pattern[2]);
   console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
   
   let val0 = boxes[pattern[0]].innerText;
   let val1 = boxes[pattern[1]].innerText;

   let val2 = boxes[pattern[2]].innerText; 
   
      
        
  

   if (val0 != "" && val1 != "" && val2 != "" && val0 === val1 && val1===val2) {
    boxes.forEach((box) => {
      box.disabled = true;
    });
      console.log("winner");
      let newgame = document.createElement("button");
        console.log(newgame);
        newgame.innerText="New Game";
        newgame.style.fontSize= "25px";
        

      
        let Win = document.createElement("h6");
          Win.style.color = "Pink";
          Win.style.fontSize = "32px";
        
        Win.innerText= `Winner is ${val1}`;
       
         

        let h1= document.querySelector("h1");
         h1.before(newgame);
         h1.prepend(Win);
         reset.addEventListener("click",() => {
          boxes[0].innerText="";
          boxes[1].innerText="";
          boxes[2].innerText="";
          boxes[3].innerText="";
          boxes[4].innerText="";
          boxes[5].innerText="";
          boxes[6].innerText="";
          boxes[7].innerText="";
          boxes[8].innerText="";
          newgame.remove();
          Win.remove();
          newgame.remove();
         
              
           
            });
            newgame.addEventListener("click",() => {
              boxes[0].innerText="";
              boxes[1].innerText="";
              boxes[2].innerText="";
              boxes[3].innerText="";
              boxes[4].innerText="";
              boxes[5].innerText="";
              boxes[6].innerText="";
              boxes[7].innerText="";
              boxes[8].innerText="";
              newgame.remove();
              Win.remove();
              newgame.remove();});
              boxes.forEach((box) => {
                box.disabled = false;
              });
              } }
               

         
          } 
           
          