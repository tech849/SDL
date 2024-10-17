function sfx(){
document.getElementById("searchinp").innerHTML="<p id='searchinp1'>Loading...</p>";
}
const effects = setTimeout(srep,3000);
function srep(){
document.getElementById("searchinp1").innerHTML="<p id='menu'></p><input style='width:200px;' type='search' onkeypress='search();'id='usquerry'placeholder='search..'>";
}
