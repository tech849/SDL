function documentary(){
document.getElementById("usresult").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='the_master_of_lightning();rdirect();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='dc_vs_ac();'></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
}
  //main
document.getElementById("scientist").innerHTML="<h3>GREAT SCIENTIST DOCUMENTARIES</h3><br><div class='scrll-imgs'><embed src='/SDL/the-master-of-lightning.jpg' width='200' height='200'onclick='the_master_of_lightning();rdirect();'></embed><embed src='/SDL/dc-vs-ac.jpg' width='200' height='200' onclick='dc_vs_ac();'></embed><embed src='/SDL/.jpg' width='200' height='200'></embed></div>";
function the_master_of_lightning(){
  window.open("/SDL/the-master-of-lightning.html");
}
function dc_vs_ac(){
  window.open("/SDL/dc-vs-ac.html");
}
