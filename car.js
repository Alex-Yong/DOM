//Create a function that creates car objects which have a make, model year, and color.
var x;
function set()
{   x = cars(document.getElementById("inputField1").value, document.getElementById("inputField2").value, document.getElementById("inputField3").value, document.getElementById("inputField4").value);
// document.getElementById("outputText").innerHTML=x.getCars();
document.getElementById("outputText1").innerHTML=x.getCars()+ "this car has a max speed of 85";
}


function cars(a,b,c,d){
  //variable that creates the cars speed
  var speed=0;
  //identify make, model, year, color
  return{
    make: a,
    model: b,
    year: c,
    color: d,
    // create function that returns as a string to tell user the car's information
    getCars: function(){return this.make+" "+ this.model +" "+ this.year +" "+ this.color;},
    //function to return the speed
    getSpeed: function(){return speed;},
    //function to set the acceleration
    accelerate: function(){
        return speed=speed+10;
      },
    //function to set the decrease in speed
    brake: function(){
      speed=speed-3;
      console.log(speed);
    },
    brake2: function(){
      speed= speed -1;
      console.log(speed);
    },
    accelerate2: function(){
      speed = ++speed
    }
  }
}

function string(a){
  return a.make+" "+ a.model +" "+ a.year +" "+ a.color;
}


//function that allows car to accelerate to 70mph
function acceleration(a){
  while(a.getSpeed()<70){
   a.accelerate();}
   return a.getSpeed();
}
//function that breaks exactly at 0
function brake(a){
  while(a.getSpeed()>=15){
    a.brake();
  };
  while((a.getSpeed()<15) && (a.getSpeed()>0)){
    a.brake2();
    console.log(a.getSpeed());
  }
  return a.getSpeed();
}


//function that stops acceleration at 85
function acceleration2(a){
  if(a.getSpeed()<=70){
    a.accelerate();
  };
  if((a.getSpeed()>70) && (a.getSpeed()<85)){
    a.accelerate2();
    console.log(a.getSpeed());
  }
  document.getElementById("outputText2").innerHTML=a.getSpeed();
}

//emergency break that doesn't go over half the max speed
function eBrake(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*((max/2)-min+1))+min;
}
