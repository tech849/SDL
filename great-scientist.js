function documentary(){
document.getElementById("usresult").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='the_master_of_lightning();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='dc_vs_ac();'></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></p></div>";
}
  //main
document.getElementById("scientist").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='load_lightning();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='dc_vs_ac();'></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
function load_lightning(){
  document.getElementById("usresult").innerHTML="<p border='2px solid yellow'bgcolor='white' width='200'height=200'font-size='30px'>redirecting</p>";
  const loadtesla = setTimeout(the_master_of_lightning,5000);
}
function the_master_of_lightning(){
  window.open("/SDL/the-master-of-lightning.html");
  const reset =setTimeout(reload,600);
}
function dc_vs_ac(){
  window.open("/SDL/dc-vs-ac.html");
}
//refresh
function reload(){
  location.reload();
}
