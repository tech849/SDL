document.getElementById("menu").innerHTML="<table border='none' outline='none'style='position:fixed;top:0px;cursor:pointer;width:100%;font-size:5vw;'><td onclick='home();'onchange='menu()'>&#8962;HOME</td><td onclick='videos();'>VIDEOS</td><td><input style='width:5vw;' type='search' onkeypress='search();'id='usquerry'placeholder='search..'></td><td onclick='cate();'>&#9776;</td></table>";
//clickable
function menu(){
 document.getElementById("menu").innerHTML="<table border='none' outline='none'style='position:fixed;top:0px;cursor:pointer;width:100%;font-size:5vw;'><td onclick='home();'onchange='menu()'>&#8962;HOME</td><td onclick='videos();'>VIDEOS</td><td><input style='width:200px;' type='search' onkeypress='search();'id='usquerry'placeholder='search..'></td><td onclick='cate();'>&#9776;</td></table>";
}
