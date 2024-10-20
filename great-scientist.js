function documentary(){
document.getElementById("scientist").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/the-forgotten-genius.jpg' width='200' height='200'onclick='ld3();'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
}
  //main
document.getElementById("scientist").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/the-forgotten-genius.jpg' width='200' height='200'onclick='ld3();'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
//function load_lightning(){
 // document.getElementById("usresult").innerHTML="<p border='2px solid yellow'bgcolor='white' width='200'height=200'font-size='30px'>redirecting</p>";
 // const loadtesla = setTimeout(the_master_of_lightning,5000);
//}
//function the_master_of_lightning(){
//  window.open("/SDL/the-master-of-lightning.html");
//}
function dc_vs_ac(){
  window.open("/SDL/dc-vs-ac.html");
}
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
document.getElementById("lm").innerHTML="<p style='color:yellow;background-color:black;border:2px solid white;font-size:5vw;'>Redirecting ...To <br>(DC VS AC)</p>";
const loading1 = setTimeout(load1, 5000);
const reset1 = setTimeout(rst, 6000);
               }
  
         function load1(){
             window.open("/SDL/dc-vs-ac.html");
                }
// the forgotten genius
function load(){
             window.open("/SDL/the-master-of-lightning.html");
                }
//dv vs ac
function ld3(){
document.getElementById("lm").innerHTML="<p style='color:yellow;background-color:black;border:2px solid white;font-size:5vw;'>UPLOADING SOON..</p>";
//const loading2 = setTimeout(load1, 5000);
const reset2 = setTimeout(rst, 6000);
               }
  
         function load2(){
              // window.open("/SDL/dc-vs-ac.html");
                }
//refresh common
function rst(){
location.reload();
}
