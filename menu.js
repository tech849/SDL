document.getElementById("menu").innerHTML="<table border='none' outline='none'style='position:fixed;top:0px;cursor:pointer;width:100%;height:50dp;'><td onclick='home();'onchange='menu()'>&#8962;HOME</td><td onclick='videos();'>VIDEOS</td><td><p id='searchinp'><button onclick='sfx();'>SEARCH</p></p></td><td onclick='cate();'>&#9776;</td></table>";
function menu(){
  document.getElementById("menu").innerHTML="<table border='none' outline='none'style='position:fixed;top:0px;cursor:pointer;width:100%;'><td onclick='home();'onchange='menu()'>&#8962;HOME</td><td onclick='videos();'>VIDEOS</td><td><p id='searchinp'><button onclick='srep();'>SEARCH</button></p></td><td onclick='cate();'>&#9776;</td></table>";

}
