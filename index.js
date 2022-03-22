// let myfriends = ["Yossi", "Avi", "Dani"];

// console.log(myfriends[2].substring(0, 3));
// const FirstDay = new Date("May 29, 1996 23:15:30");
// const Day = FirstDay.getDate();
// console.log(Day);
// document.getElementsByClassName("message").innerHTML ="correct number"
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number !";

// document.querySelector(".number").textContent = "13";
// document.querySelector(".score").textContent = "10";
// document.querySelector(".guess").value = "23";

let secratNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secratNumber);
let score = 20;
let highscore = 0;

let dispalyMassage = function(message) {
  document.querySelector(".message").textContent = message;
}

let displayNumber = function(number){
  document.querySelector(".number").textContent =number
}

let displayScore = function(score){
  document.querySelector(".score").textContent =score
}

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
 

  if (!guess) {
    dispalyMassage("put a nummber !")
  } 
  
  
  else if (guess == secratNumber) {
    dispalyMassage("you right !");


    displayNumber(secratNumber);

    
    
    document.querySelector("body").style.backgroundColor = "green";

   
   
    document.querySelector(".number").style.width = "30rem";

    
    

    if(score > highscore){
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

  }
  
  else if (guess !== secratNumber ) {
    if(score > 1)
    {
    dispalyMassage(guess > secratNumber ? "number too high!" :"number too low");
    score--;
    displayScore(score)
    }
    else{
      document.querySelector("body").style.backgroundColor = "red"

      dispalyMassage("you lost the game!")
    }
  } 
  // else if (guess < secratNumber) {
  //   if(score > 1){
  //   document.querySelector(".message").textContent = "number to low!";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  //   } 
  //   else{
  //     document.querySelector(".message").textContent = "you lost the game!";
  //   }
  // }
});




document.querySelector(".refersh").addEventListener("click", () => {
  location.reload();

})


document.querySelector(".again").addEventListener("click", () => {
  let newScore = 20;
  document.querySelector(".score").textContent = newScore   
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing..."
  document.querySelector(".guess").value =" "
  document.querySelector("body").style.backgroundColor = "black"
  document.querySelector(".number").style.width = "15rem";
  docoment.querySelector(".highscore").textContent = score;
})




