function documentary(){
document.getElementById("usresult").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div class='scrll-imgs' id='lm'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
}
  //main
document.getElementById("scientist").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div  id='lm' class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='ld();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='ld2();'></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
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
document.getElementById("lm").innerHTML="redirecting";
const loading = setTimeout(load, 1000);
const reset = setTimeout(rst, 2000);


               }
  
         function load(){
             window.open("/SDL/the-master-of-lightning.html");
                }
//dv vs ac
function ld2(){
document.getElementById("lm").innerHTML="redirecting";
const loading1 = setTimeout(load1, 1000);
const reset1 = setTimeout(rst, 2000);
               }
  
         function load(){
             window.open("/SDL/dc-vs-ac.html");
                }
//refresh common
function rst(){
location.reload();
}
