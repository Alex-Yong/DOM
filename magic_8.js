var answers = ["Not Likely", "Uh-uh", "Probably", "Yeah why not?", "Yes"]
var magic8 = prompt("The Magic 8 ball says: Ask your question here:")
var randAnswer = Math.floor(Math.random() * (5 - 0 + 1));

function userQuestion() {
  prompt(magic8);


if (randAnswer === 0){
  alert(answers[0]);
}

else if (randAnswer === 1){
  alert(answers[1]);
}

else if (randAnswer === 2){
  alert(answers[2]);
}

else if (randAnswer === 3){
  alert(answers[3]);
}

else if (randAnswer === 4){
  alert(answers[4]);
}

else (randAnswer === 5) {
  alert(answers[5]);
}
};
