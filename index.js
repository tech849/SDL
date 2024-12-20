const sfx = setTimeout(search,4500);
function search(){
var a = document.getElementById("usquerry").value;
if(a.toLowerCase() == "konark temple"){
document.getElementById("usresult").innerHTML="<a href='/SDL/konark.html' style='underline:none;'><table border='1px solid black'style='background-color:#8FBC8B;'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th></tr><tr><td>KONARK SUN TEMPLE  TEMPLE</td><td>puri,chandrabhaga</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "jagannath  temple"){
document.getElementById("usresult").innerHTML="<a href='/SDL/jagannath.html'><table border='1px solid black'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th><tr><td>JAGANNATH TEMPLE</td><td>bada danda,puri</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "lingaraj temple"){
document.getElementById("usresult").innerHTML="<a href='/SDL/lingaraj.html'><table border='1px solid black'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th><tr><td>LINGARAJ TEMPLE</td><td>bhubneswar</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "ratan tata"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/ratan-naval-tata.jpg' width='200' height='200'></embed></td><td>RATAN NAVAL TATA<br><i>oral story</i></td></tr></table>";
}
  if(a.toLowerCase() == "industries"){
document.getElementById("usresult").innerHTML="<embed src='/SDL/industries.html'width='100%'height='100%'></embed>";
  }
  if(a.toLowerCase() == "quiz games"){
document.getElementById("usresult").innerHTML="<embed src='/SDL/brain.html'width='100%'height='100%'></embed>";
  }
  if(a.toLowerCase() == "java quiz"){
document.getElementById("usresult").innerHTML="<embed src='/SDL/java-quiz.html'width='100%'height='100%'></embed>";
  }
  if(a.toLowerCase() == "nikola tesla"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/the-master-of-lightning.jpg' width='200'height='200'></embed></td><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
   if(a.toLowerCase() == "dc vs ac"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
  if(a.toLowerCase() == "thomas edison"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
  if(a.toLowerCase() == "the master of lightning"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/the-master-of-lightning.jpg' width='200'height='200'></embed></td><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }

  //  single word search resulth

if(a.toLowerCase() == "jagannath"){
document.getElementById("usresult").innerHTML="<a href='/SDL/jagannath.html'><table border='1px solid black'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th><tr><td>JAGANNATH TEMPLE</td><td>bada danda,puri</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "lingaraj"){
document.getElementById("usresult").innerHTML="<a href='/SDL/lingaraj.html'><table border='1px solid black'><tr><th>NAME</th><th>LOCATION</th><th>STATE</th><tr><td>LINGARAJ TEMPLE</td><td>bhubneswar</td><td>ODISHA</td></tr></table></a>";
}
if(a.toLowerCase() == "tata"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/ratan-naval-tata.jpg' width='200' height='200'></embed></td><td>RATAN NAVAL TATA<br><i>oral story</i></td></tr></table>";
}
  if(a.toLowerCase() == "quiz"){
document.getElementById("usresult").innerHTML="<embed src='/SDL/brain.html'width='100%'height='100%'></embed>";
  }
  if(a.toLowerCase() == "java"){
document.getElementById("usresult").innerHTML="<p>JAVA</p><br><p>JAVA QUIZ</p>";
  }
   if(a.toLowerCase() == "tesla"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/the-master-of-lightning.jpg' width='200'height='200'></embed></td><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
  if(a.toLowerCase() == "master"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/the-master-of-lightning.jpg' width='200'height='200'></embed></td><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
  if(a.toLowerCase() == "lightning"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/the-master-of-lightning.jpg' width='200'height='200'></embed></td><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
   if(a.toLowerCase() == "dc"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
  if(a.toLowerCase() == "ac"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
  if(a.toLowerCase() == "thomas"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
  if(a.toLowerCase() == "edison"){
document.getElementById("usresult").innerHTML="<table><tr><td><embed src='/SDL/dc-vs-ac.jpg' width='200'height='200'></embed></td></tr></table> ";
  }
  else{
document.getElementById("usresult").innerHTML="<div id='usresult'><div id='face'></div><div id='face2'></div><div id='face3'></div><div id='eye'></div><div id='eye2'></div><div id='eye3'></div><div id='eye4'></div><div id='eye5'></div><div id='eye6'></div><div id='tilak1'></div><div id='tilak2'></div><div id='tilak3'></div><div id='smile'></div><div id='smile2'></div><div id='smile3'></div><div id='skeleton'></div><div id='skeleton2'></div><div id='skeleton3'></div></div><div id='cover'></div>";
}

}
