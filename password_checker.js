//password checker js
// function reverseCharAt (name, num) {
//  var pos = (name.length-1) -num;
//  name.charAt(pos);
// }
//
// userId != password;
// userId.length >= 6 && password.length >= 6;
// !userId.includes("!") && !userId.includes("#") && !userId.includes("$");
// password.includes("!") || password.includes("#") || password.includes("$");
// password != "password"

// function checkUserID(userId) {
// alert(userId != "password")
// }

var userId;
var password;

function yourId() {
  userId = document.getElementById("inputField1").value;
  password = document.getElementById("inputField2").value;
  // var regularExpression = /[0-9]/
  var Identification = (userId != password  && userId.length >= 6 && (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")));
  var pass = (password != "password")
    && (password.includes("!") || password.includes("#") || password.includes("$"))
    && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9"))
    && (password != password.toUpperCase() && password != password.toLowerCase()) ;
  document.getElementById("outputText").innerHTML="Id is valid: " + (Identification && pass);
}
