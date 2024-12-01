function appendtodisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}


function operators(value) {
  const screen = document.getElementById("display");
let previousValue=screen.value

  if(value!=="=")
  {
  previousValue =previousValue +value;
  screen.value=null
  }



  const result=finalcalulation(previousValue);





 
 if(value==="=")
 {
    calculate(result)
   
 }
  
}
let newvalue=""
function finalcalulation(data)
{
    
 newvalue=newvalue+data;
 
 return newvalue;
}



function calculate(value) {
    console.log("this is value"+value);
  const display = document.getElementById("display");
  try {
    const dataresult = eval(value);
  display.value=dataresult;
  } catch {
    display.value = "Error";
  }
}

function clearDisplay(value){
  const display = document.getElementById("display");

    display.value=null;
    

}