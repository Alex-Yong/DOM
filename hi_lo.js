
// Create random number (1-100) variable to use in function
var randomNumber = Math.floor(Math.random() * (100)) + 1;
console.log(randomNumber)
//variable where the client will input own data
var guess;

//function created to call upon later
function userGuess (){
  //prompt for client to input data into variable guess
  guess = prompt("Please guess a number from 1-100");
  //turn string variable into numbers
  // guess = parseInt(guess);
}


function game(){
  console.log(randomNumber);
  userGuess();
  var count = 1;
while (count<7 && (guess != randomNumber)) {
  if(parseInt(guess)>randomNumber) {alert("you are too high");userGuess(); count = count+1; alert(count);}
  if(parseInt(guess)<randomNumber) {alert("you are a downer");userGuess(); count = count+1; alert(count)}
  if(parseInt(guess)!= guess ) {alert("this is wrong"); count=8;}

}

if (parseInt(guess) === randomNumber) {alert("you win!");}
else {alert("you lose");}
}




//purpose: distinguiosh which of the two numbers are larger
//signature(integer,integer) -> larger integer
//examples: bigNum(4,2) -> 4
//bigNum(3,6) -> 6
//bigNum(6,6) -> "6"
//bigNum(-4,-1) -> -1

function bigNum(a,b){
  var a;
  var b;
  if (a>b){return a;}
  if(b>a){return b;}
  if(a===b){return "they're the same";}
}


//purpose: function creates "hello world" message for at elast 3 different languages
//signature: (language) -> message in that language
//examples: helloWorld(en) -> "hello world"
//helloWorld(sp) -> "hola mundo"
//helloWorld(fr) -> "bonjour monde"

function helloWorld(b){
  var b;
  if(b==="" || b==="en"){return "hello world";}
  if(b==="fr"){return "bonjour monde";}
  if(b==="sp"){return "hola mundo"}
}

function assignGrade(x){
  var x;
  if(x>100){return"this messed fool";}
  if(x >= 90 && x<=100){ return "A";}
}
