function documentary(){
document.getElementById("usresult").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/the-forgotten-genius.jpg' width='200' height='200'onclick='ld3();'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
}
  //main
document.getElementById("scientist").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/the-forgotten-genius.jpg' width='200' height='200'onclick='ld3();'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";

//refresh
function ld(){
document.getElementById("lm").innerHTML="<table style='border-collapse:collapse;'><tr><td><embed src='/SDL/the-master-of-lightning.jpg'width='200'height='200'></embed></td><td><h2>THE MASTER OF<br> LIGHTNING</h2></td></tr><tr><td><p id='l1'style='color:yellow;border-radius:20px;'>Loading...</p></td><td><p id='l2'style='color:blue;background-color:transparent;border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";
 const f = setTimeout(fetching,1000);
  const r = setTimeout(redirecting,2000);
  const loading3 = setTimeout(load, 5000);
const reset = setTimeout(rst, 6000);
  //load per%
   const perc112 = setTimeout(per1,1100);
  const perc212 = setTimeout(per2,2100);
  const perc312= setTimeout(per3,3100);
  const perc412 = setTimeout(per4,4100);
               }
  
         function load(){
             window.open("/SDL/the-master-of-lightning.html");
                }
//dv vs ac
function ld2(){
document.getElementById("lm").innerHTML="<table style='border-collapse:collapse;'><tr><td><embed src='/SDL/dc-vs-ac.jpg'width='200'height='200'></embed></td><td><h2>DC VS AC</h2></td><tr><td><p id='l1'style='color:yellow;border-radius:20px;'>Loading...</p></td><td><p id='l2'style='color:blue;background-color:transparent;border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";
 const f2 = setTimeout(fetching,1000);
  const r2 = setTimeout(redirecting,2000);
  const loading2 = setTimeout(load2, 5000);
const reset4 = setTimeout(rst, 6000);
  //load per%
   const perc11 = setTimeout(per1,1100);
  const perc21 = setTimeout(per2,2100);
  const perc31= setTimeout(per3,3100);
  const perc41 = setTimeout(per4,4100);
               }
  
         function load2(){
             window.open("/SDL/dc-vs-ac.html");
                }

// the forgotten genius

//dv vs ac
function ld3(){
document.getElementById("lm").innerHTML="<table style='border-collapse:collapse;'><tr><td><embed src='/SDL/the-forgotten-genius.jpg'width='200'height='200'></embed></td><td><h2>THE FORGOTTEN GENIUS</h2><br><button onclick='watch();'>WATCH</button><button onckiclick='download();'>DOWNLOAD</button><button onclick='read();'>READ</button></td></tr></table>";
  
               // const percentage =  setTimeout(fetched,5000);
  const f1 = setTimeout(fetching,1000);
  const r1 = setTimeout(redirecting,2000);
  const av1 = setTimeout(avail,4000);
//const loading2 = setTimeout(load1, 5000);
const reset3 = setTimeout(rst, 6000);
  //load per fetch
  const perc1 = setTimeout(per1,1100);
  const perc2 = setTimeout(per2,2100);
  const perc3= setTimeout(per3,3100);
  const perc4 = setTimeout(per4,4100);
               }
  
         function load3(){
              // window.open("/SDL/dc-vs-ac.html");
                }
//button functions
function watch(){
   document.getElementById("nikola1").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;'>Loading...</p></td><td><p id='l2'style='color:blue;background-color:transparent;border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
}
function downlod(){
   document.getElementById("nikola1").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;'>Loading...</p></td><td><p id='l2'style='color:blue;background-color:transparent;border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
}
function read(){
   document.getElementById("nikola1").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;'>Loading...</p></td><td><p id='l2'style='color:blue;background-color:transparent;border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
}
//default functions
function rst(){
location.reload();
         }
function fetching(){
             document.getElementById("l1").innerHTML="fetching...";      
         }
function redirecting(){
             document.getElementById("l1").innerHTML="redirecting...";
             
         }
function avail(){
             document.getElementById("l1").innerHTML="AVAIL SOON..";
             
         }
// loader percentage
function per1(){
             document.getElementById("l2").innerHTML="<b style='background-color:yellow;border:1px solid red;'>25%</b>";            
         }
function per2(){
             document.getElementById("l2").innerHTML="<b style='background-color:yellow;border:1px solid red;'>50%</b>";            
         }
function per3(){
             document.getElementById("l2").innerHTML="<b style='background-color:yellow;border:1px solid red;'>75%</b>";            
         }

function per4(){
             document.getElementById("l2").innerHTML="100%";            
         }
