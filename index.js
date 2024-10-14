function search(){
var a = document.getElementById("usquerry").value;
if(a.toLowerCase() == "konark"){
document.getElementById("usresult").innerHTML="<a href='/SDL/konark.html' style='underline:none;'><table border='1px solid black'style='background-color:#8FBC8B;'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th></tr><tr><td>KONARK SUN TEMPLE  TEMPLE</td><td>puri,chandrabhaga</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "jagannath"){
document.getElementById("usresult").innerHTML="<a href='/SDL/jagannath.html'><table border='1px solid black'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th><tr><td>JAGANNATH TEMPLE</td><td>bada danda,puri</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "lingaraj"){
document.getElementById("usresult").innerHTML="<a href='/SDL/lingaraj.html'><table border='1px solid black'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th><tr><td>LINGARAJ TEMPLE</td><td>bhubneswar</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "tata"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/ratan-naval-tata.jpg' width='200' height='200'></embed></td><td>RATAN NAVAL TATA<br><i>oral story</i></td></tr></table>";
}
  if(a.toLowerCase() == "industries"){
document.getElementById("usresult").innerHTML="<embed src='/SDL/industries.html' width='100%' height='100%'></embed>";
  }
}
