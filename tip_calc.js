var x;

function tipCalc(){
  x = document.getElementById("inputField").value;
    // alert("your tip will be " + );
    document.getElementById("outputText").innerHTML="your tip will be " + (x=x*.20);
}
