
// Create random number (1-100) variable to use in function
var randomNumber = Math.floor(Math.random() * (100)) + 1;
console.log(randomNumber)
//variable where the client will input own data

//function created to call upon later
  //prompt for client to input data into variable guess
var guess;
  //turn string variable into numbers
  // guess = parseInt(guess);

  var count = 0;



function game(){
  console.log(randomNumber);
  guess=document.getElementById("inputField").value;
  // while (count<7 && (guess != randomNumber))
    if(guess>randomNumber && count<7) {count = count+1; document.getElementById("outputText").innerHTML="you are too high, this is your "+count+" attempt"; }

    if(guess<randomNumber && count<7) { count = count+1; document.getElementById("outputText").innerHTML="you are a downer, this is your "+count+" attempt";}

    if(parseInt(guess)!= guess) {document.getElementById("outputText").innerHTML="this is wrong, please put a number"; return}

    if (guess === randomNumber && count<=7) {document.getElementById("outputText").innerHTML="you win!";}

    if (count == 7) {document.getElementById("outputText").innerHTML="you lose";}
}
