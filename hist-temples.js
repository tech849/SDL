document.getElementById("usresult11").innerHTML="<h3>TEMPLES</h3><br><div id='ldmain' class='scrll-imgs'><embed src='/SDL/konark.jpg' width='200' height='200'onclick='ldkonark();'></embed><embed src='/SDL/jagannath.jpg' width='200' height='200'></embed><embed src='/SDL/lingaraj.jpg' width='200' height='200'></embed></div><br><h3>NATION</h3><br><div class='scrll-imgs'><embed src='/SDL/indian.jpg' width='200' height='200'></embed><embed src='/SDL/pakistan.jpg' width='200' height='200'></embed><embed src='/SDL/bangladesh.jpg' width='200' height='200'></embed><embed src='/SDL/myanmar.jpg' width='200' height='200'></embed><embed src='/SDL/china.jpg' width='200' height='200'></embed></div>";
//redirect main

function ldkonark(){
document.getElementById("ldmain").innerHTML="<p style='color:yellow;background-color:black;border:2px solid white;font-size:5vw;'>Redirecting...To<br>(KONARK TEMPLE)</p>";
const loadingkonark = setTimeout(ldmain, 5000);
const resetkonark = setTimeout(rst1, 6000);
               }
  
         function ldmain(){
              window.open("/SDL/konark.html");
                }
//refresh common
function rst1(){
location.reload();
}
