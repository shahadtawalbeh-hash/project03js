function changeText()
{
 const message = document.getElementById("message");
 message.textContent= "The text has been changed!";
 
}

function changeStyle()
{ 
 const title = document.querySelector("#maintitle");
 title.textContent= "DOM Manipulation in Action!";
 title.style.color="red";
 title.style.fontsize="36px";

}

function activateBox()
{ 
 const box = document.getElementById("box");
 box.classList.add("active");
}
 
