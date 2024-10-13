function search(){
var a = document.getElementById("usquerry").value;
if(a.toLowerCase() == "konark"){
document.getElementById("usresult").innerHTML="<a href='/konark.html' style='underline:none;'><table border='1px solid black'style='background-color:#8FBC8B;'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th></tr><tr><td>KONARK SUN TEMPLE  TEMPLE</td><td>puri,chandrabhaga</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "jagannath"){
document.getElementById("usresult").innerHTML="<a href='/jagannath.html'><table border='1px solid black'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th><tr><td>JAGANNATH TEMPLE</td><td>bada danda,puri</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "lingaraj"){
document.getElementById("usresult").innerHTML="<a href='/lingaraj.html'><table border='1px solid black'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th><tr><td>LINGARAJ TEMPLE</td><td>bhubneswar</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "tata"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/ratan-naval-tata.jpg' width='200' height='200'></embed></td><td>RATAN NAVAL TATA<br><i>oral story</i></td></tr></table>";
}
}
