let count = 0;

const countdisplay =document.getElementById("count");
const incrementbutton =document.getElementById("increment");
const decrementbutton =document.getElementById("decrement");
const resetbutton =document.getElementById("reset");


function updateCount()
{
  countdisplay.textContent=count;
  if(count>0)
{
     countdisplay.style.color= "green";
 
}
  else if (count<0)
{
    countdisplay.style.color= "red";

}
  else 
{
    countdisplay.style.color= "black";

}
}
function increment() 
{
  count++;
  updateCount();
}

function decrement() 
{
  count--;
  updateCount();
}

function reset() 
{
  count=0;
  updateCount();
}

incrementbutton.addEventListener("click",increment);
decrementbutton.addEventListener("click",decrement);
resetbutton.addEventListener("click",reset);





