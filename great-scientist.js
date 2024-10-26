function documentary(){
document.getElementById("usresult").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/the-forgotten-genius.jpg' width='200' height='200'onclick='ld3();'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
}
  //main
document.getElementById("scientist").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/the-forgotten-genius.jpg' width='200' height='200'onclick='ld3();'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";

//the master of lightning
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
document.getElementById("lm").innerHTML="<table style='border-collapse:collapse;background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);border-radius:10px;'><tr><td><embed src='/SDL/dc-vs-ac.jpg'width='150'height='150'></embed></td><td><h2 color='yellow'>DC VS AC</h2><br><button onclick='watch1();'style='background:blur(100px);border:2px solid white;color:green;'>WATCH</button><button onclick='download1();'style='background:blur(100px);border:2px solid white;color:green;'>DOWNLOAD</button><button onclick='read1();'style='background:blur(100px);border:2px solid white;color:green;'>READ</button><br><p id='nikola2'></p></td></tr></table>";
 
               }
  
         
function watch1(){
   document.getElementById("nikola2").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;background-image: linear-gradient(to right, #434343 0%, black 100%);'>Loading...</p></td><td><p id='l2'style='color:blue;background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
 const f12= setTimeout(fetching,1000);
  const r12 = setTimeout(redirecting,2000);
  const av12 = setTimeout(displaying,4000);
  
//const loading2 = setTimeout(load1, 5000);
//const reset3 = setTimeout(rst, 6000);
  //load per fetch
  const perc12= setTimeout(per1,1100);
  const perc22= setTimeout(per2,2100);
  const perc32= setTimeout(per3,3100);
  const perc42= setTimeout(per4,4100);
  const stream32= setTimeout(stream_tfg1,6000);
}
function download1(){
   document.getElementById("nikola2").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;background-image: linear-gradient(to right, #434343 0%, black 100%);'>Loading...</p></td><td><p id='l2'style='color:blue;background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
 const f_12 = setTimeout(fetching,1000);
  const r_12= setTimeout(redirecting,2000);
  const av_12 = setTimeout(avail,4000);
//const loading2 = setTimeout(load1, 5000);
//const reset_3 = setTimeout(rst, 6000);
  //load per fetch
  const perc_12= setTimeout(per1,1100);
  const perc_22= setTimeout(per2,2100);
  const perc_32= setTimeout(per3,3100);
  const perc_42= setTimeout(per4,4100);
  const download12 = setTimeout(dwn1,6000);
}
function read1(){
   document.getElementById("nikola2").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;background-image: linear-gradient(to right, #434343 0%, black 100%);'>Loading...</p></td><td><p id='l2'style='color:blue;background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
 const f1_22 = setTimeout(fetching,1000);
  const r1_22= setTimeout(redirecting,2000);
  const av1_22= setTimeout(avail,4000);
//const loading2 = setTimeout(load1, 5000);
const reset3_42 = setTimeout(rst, 6000);
  //load per fetch
  const perc1_22 = setTimeout(per1,1100);
  const perc2_32 = setTimeout(per2,2100);
  const perc3_42= setTimeout(per3,3100);
  const perc4_52 = setTimeout(per4,4100);
}

//l2
function stream_tfg1(){
  document.getElementById("lm").innerHTML="<iframe src='/SDL/the-forgotten-genius.html'height='240'width='320'></iframe>";
}
function dwn1(){
  document.getElementById("nikola2").innerHTML="<a href='https://sharedby.blomp.com/dkNYX9' download>CLICK TO START DOWNLOAD</a>";
}
//l2

// the forgotten genius




function ld3(){
document.getElementById("lm").innerHTML="<table style='border-collapse:collapse;background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);border-radius:10px;'><tr><td><embed src='/SDL/the-forgotten-genius.jpg'width='150'height='150'></embed></td><td><h2 color='yellow'>THE FORGOTTEN GENIUS</h2><br><button onclick='watch();'style='background:blur(100px);border:2px solid white;color:green;'>WATCH</button><button onclick='download();'style='background:blur(100px);border:2px solid white;color:green;'>DOWNLOAD</button><button onclick='read();'style='background:blur(100px);border:2px solid white;color:green;'>READ</button><br><p id='nikola1'></p></td></tr></table>";
  
               }
function watch(){
   document.getElementById("nikola1").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;background-image: linear-gradient(to right, #434343 0%, black 100%);'>Loading...</p></td><td><p id='l2'style='color:blue;background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
 const f1 = setTimeout(fetching,1000);
  const r1 = setTimeout(redirecting,2000);
  const av1 = setTimeout(displaying,4000);
  
//const loading2 = setTimeout(load1, 5000);
//const reset3 = setTimeout(rst, 6000);
  //load per fetch
  const perc1 = setTimeout(per1,1100);
  const perc2 = setTimeout(per2,2100);
  const perc3= setTimeout(per3,3100);
  const perc4 = setTimeout(per4,4100);
  const stream3 = setTimeout(stream_tfg,6000);
}
function download(){
   document.getElementById("nikola1").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;background-image: linear-gradient(to right, #434343 0%, black 100%);'>Loading...</p></td><td><p id='l2'style='color:blue;background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
 const f_1 = setTimeout(fetching,1000);
  const r_1 = setTimeout(redirecting,2000);
  const av_1 = setTimeout(avail,4000);
//const loading2 = setTimeout(load1, 5000);
//const reset_3 = setTimeout(rst, 6000);
  //load per fetch
  const perc_1 = setTimeout(per1,1100);
  const perc_2 = setTimeout(per2,2100);
  const perc_3= setTimeout(per3,3100);
  const perc_4 = setTimeout(per4,4100);
  const download1 = setTimeout(dwn,6000);
}
function read(){
   document.getElementById("nikola1").innerHTML="<table><tr><td><p id='l1'style='color:yellow;border-radius:20px;background-image: linear-gradient(to right, #434343 0%, black 100%);'>Loading...</p></td><td><p id='l2'style='color:blue;background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;border:2px solid yellow;'></embed></p></td></tr></table>";      
 const f1_2 = setTimeout(fetching,1000);
  const r1_2 = setTimeout(redirecting,2000);
  const av1_2 = setTimeout(avail,4000);
//const loading2 = setTimeout(load1, 5000);
const reset3_4 = setTimeout(rst, 6000);
  //load per fetch
  const perc1_2 = setTimeout(per1,1100);
  const perc2_3 = setTimeout(per2,2100);
  const perc3_4= setTimeout(per3,3100);
  const perc4_5 = setTimeout(per4,4100);
}
//l3
function stream_tfg(){
  document.getElementById("lm").innerHTML="<iframe src='/SDL/the-forgotten-genius.html'height='240'width='320'></iframe>";
}
function dwn(){
  document.getElementById("nikola1").innerHTML="<a href='https://sharedby.blomp.com/dkNYX9' download>CLICK TO START DOWNLOAD</a>";
}

// Get the element you want displayed in fullscreen 

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

function displaying(){
             document.getElementById("l1").innerHTML="DISPLAYING...";
             
}


// loader percentage





function per1(){
             document.getElementById("l2").innerHTML="<b style='background-color:yellow;border:1px solid red;border-radius:10px;width:16px;height:16px;'>25%</b>";            
         }
function per2(){
             document.getElementById("l2").innerHTML="<b style='background-color:yellow;border:1px solid red;border-radius:10px;width:16px;height:16;'>50%</b>";            
         }
function per3(){
             document.getElementById("l2").innerHTML="<b style='background-color:yellow;border:1px solid red;border-radius:10px;width:16px;height:16px;'>75%</b>";            
         }

function per4(){
             document.getElementById("l2").innerHTML="<b style='background-color:yellow;border:1px solid red;border-radius:10px;'>100%</b>";            
         }
