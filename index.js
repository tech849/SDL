function home(){
document.getElementById("usresult").innerHTML="<p onclick='home();'style='cursor:pointer;background-color:black;color:white;position:fixed;top:0px;left:250px;font-size:20px;'>HOME</p><div id='usresult'><div id='face'></div><div id='face2'></div><div id='face3'></div><div id='eye'></div><div id='eye2'></div><div id='eye3'></div><div id='eye4'></div><div id='eye5'></div><div id='eye6'></div><div id='tilak1'></div><div id='tilak2'></div><div id='tilak3'></div><div id='smile'></div><div id='smile2'></div><div id='smile3'></div><div id='skeleton'></div><div id='skeleton2'></div><div id='skeleton3'></div></div><div id='cover'></div><div id='god'></div>";
}
function categ(){
document.getElementById("usresult").innerHTML="<p style='cursor:pointer;color:white;background-color:black;position:fixed;top:0px;left:170px;font-size:20px;'onclick='categ()' >MENU</p><br><table style='position:fixed;left:0px;background-image:none;border:none;color:yellow;'><tr><tr><td><embed src='https://cdn-icons-png.flaticon.com/512/4997/4997543.png'width='200px'height='200px'style='border-radius:50%;' onclick='codez();'></embed></td><td><embed src='https://cdn-icons-png.flaticon.com/512/2234/2234697.png'width='200px'height='200px'style='border-radius:50%;'></embed></td><td><embed src='https://cdn-icons-png.flaticon.com/512/2942/2942544.png'width='200px'height='200px'style='border-radius:;'></embed></td><td><embed src='https://cdn-icons-png.flaticon.com/512/1038/1038064.png'width='200px'height='200px'style='border-radius:0%;' onclick='videos();'></embed></td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CODE PUZZLE</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HISTORY</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDUSTRIES</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VIDEOS</d></tr></table></p>";
 document.getElementById("cover").style.display="none";
}
function codez(){
document.getElementById("usresult").innerHTML="<table style='position:fixed;left:0px;background-image:none;border:none;color:yellow;'><tr><td><a href='/SDL/jq1.html'><embed src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png' style='width:200px;height:200px;border-radius:0%;' ></embed></a></td><td><a href='/SDL/python-quiz.html'><embed src='https://cdn-icons-png.flaticon.com/512/5968/5968350.png' style='width:200px;height:200px;border-radius:0%;'></embed></a></td><td><a href='/SDL/html-quiz.html'><embed src='https://cdn-icons-png.flaticon.com/512/5968/5968267.png'style='width:200px;height:200px;border-radius:0%;'></embed></a></td><td><a href='/SDL/php-quiz.html'><embed src='https://cdn-icons-png.flaticon.com/512/5968/5968332.png' style='width:200px;height:200px;border-radius:0%;'></embed></a></td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAVA PUZZLE</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PYTHON PUZZLE</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML PUZZLE</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PHP PUZZLE</td></tr></table>";
}
function search(){
var a = document.getElementById("usquerry").value;
if(a.toLowerCase() == "konark temple"){
document.getElementById("usresult").innerHTML="<a href='/SDL/konark.html' style='underline:none;'><table><tr><td><embed src='/SDL/konark.jpg' width='200' height='200'></embed></td><td>KONARK TEMPLE<br><i>ODISHA</i></td></tr></table></a>";
}
if(a.toLowerCase() == "jagannath  temple"){
document.getElementById("usresult").innerHTML="<a href='/SDL/jagannath.html'><table><tr><td><embed src='/SDL/jagannath.jpg' width='200' height='200'></embed></td><td>JAGANNATH TEMPLE<br><i>ODISHA</i></td></tr></table></a>";
}
if(a.toLowerCase() == "lingaraj temple"){
document.getElementById("usresult").innerHTML="<a href='/SDL/lingaraj.html'><table><tr><td><embed src='/SDL/ratan-naval-tata.jpg' width='200' height='200'></embed></td><td>LINGARAJ TEMPLE<br><i>ODISHA</i></td></tr></table></a>";
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
document.getElementById("usresult").innerHTML="<a href='/SDL/jagannath.html<table><tr><td><embed src='/SDL/ratan-naval-tata.jpg' width='200' height='200'></embed></td><td>JAGANNATH TEMPLE<br><i>ODISHA</i></td></tr></table></a>";
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
}

const pby1 = setTimeout(n1,1000);
function n1(){
document.getElementById("pby").innerHTML="<u>programmed by</u>";
const pby2 = setTimeout(n2,3000);
}
function n2(){
document.getElementById("pby").innerHTML="<i><b>S</b></i>";
const pby1 = setTimeout(n3,2000);

}
function n3(){
document.getElementById("pby").innerHTML="<i><b>SM</b></i>";
const pby1 = setTimeout(n4,2000);

}
function n4(){
document.getElementById("pby").innerHTML="<i><b>SMA</b></i>";
const pby1 = setTimeout(n5,2000);

}
function n5(){
document.getElementById("pby").innerHTML="<i><b>SMAR</b></i>";
const pby1 = setTimeout(n6,2000);

}
function n6(){
document.getElementById("pby").innerHTML="<i><b>SMARA</b></i>";
const pby1 = setTimeout(n7,2000);

}
function n7(){
document.getElementById("pby").innerHTML="<i><b>SMARAK</b></i>";
const pby1 = setTimeout(n8,2000);

}
function n8(){
document.getElementById("pby").innerHTML="<i><b>SMARAK D</b></i>";
const pby1 = setTimeout(n9,2000);

}
function n9(){
document.getElementById("pby").innerHTML="<i><b>SMARAK DA</b></i>";
const pby1 = setTimeout(n10,2000);

}
function n10(){
document.getElementById("pby").innerHTML="<i><b>SMARAK DAS</b></i>";
const pby1 = setTimeout(n1,2000);

}
