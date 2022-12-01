var comp = (Math.floor(Math.random()*3)+2)%3;
var player = Math.ceil(prompt("rock, paper, scissors?").length/2);
if (comp === player%3)
 console.log("Draw!");
else if((player - 1)%3 === comp)
 console.log("Win!");
else
 console.log("Lose!");
