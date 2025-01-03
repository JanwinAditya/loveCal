//1.Take 2 names as input
var myName=prompt("Enter Name of Person 1");
var oName=prompt("Enter Name of Person 2");

//2.Calculate a random number
var n = Math.random();

//3. Multiply it by 100
var lovePercent=Math.floor(100*n);

//4.Display
alert('The compatibility between '+myName+" and "+oName+" is "+lovePercent+"%");