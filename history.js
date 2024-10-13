function history(){ 
document.getElementById("menu").innerHTML="<table border='1px solid transparent'style='position:fixed;top:0px;cursor:pointer;'><tr><td>HOME</td><td onclick='videos();'>VIDEOS</td><td><input style='width:150px;'type='search'onkeypress='search();'id='usquerry'placeholder='search..'></td><td onclick='cate();'>MORE&#8595;</tr></table>";
}