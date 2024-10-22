function documentary(){
document.getElementById("usresult").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/the-forgotten-genius.jpg' width='200' height='200'onclick='ld3();'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
}
  //main
document.getElementById("scientist").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/the-forgotten-genius.jpg' width='200' height='200'onclick='ld3();'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";

//refresh
function ld(){
document.getElementById("lm").innerHTML="<p style='color:yellow;background-color:black;border:2px solid white;font-size:5vw;'>Redirecting ...To<br> (THE MASTER OF LIGHTNING)</p>";
const loading = setTimeout(load, 5000);
const reset = setTimeout(rst, 6000);
               }
  
         function load(){
             window.open("/SDL/the-master-of-lightning.html");
                }
//dv vs ac
function ld2(){
document.getElementById("lm").innerHTML="<p style='color:yellow;background-color:black;border:2px solid white;font-size:5vw;'>Redirecting ...To<br> (DC VS AC)</p>";
const loading2 = setTimeout(load2, 5000);
const reset2 = setTimeout(rst, 6000);
               }
  
         function load2(){
             window.open("/SDL/dc-vs-ac.html");
                }

// the forgotten genius

//dv vs ac
function ld3(){
document.getElementById("lm").innerHTML="<table style='border-collapse:collapse;'><tr><td><embed src='/SDL/the-forgotten-genius.jpg' width='100' height='100'></embed></td><td><p id='l1'style='color:yellow;background-color:black;border-radius:20px;'></p></td><td><p id='l2'style='color:blue;background-color:yellow;border-radius:20px;'><embed src='/SDL/loading-circle.gif'width='16'height='16'style='border-radius:50%;'></embed></p></td></tr></table>";
  document.getElementById("l1").innerHTML="loading..";
               // const percentage =  setTimeout(fetched,5000);
  const p1 = setTimeout(process,10000);
//const loading2 = setTimeout(load1, 5000);
const reset3 = setTimeout(rst, 15000);
               }
  
         function load3(){
              // window.open("/SDL/dc-vs-ac.html");
                }
//refresh common
function rst(){
location.reload();
}
function process(){
             document.getElementById("l2").innerHTML="AVAIL SOON..";
             
         }
