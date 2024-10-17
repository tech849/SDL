
const effects = setTimeout(srep,5000);
function srep(){
document.getElementById("searchinp1").innerHTML="<p id='menu'></p><input style='width:200px;' type='search' onkeypress='search();'id='usquerry'placeholder='search..'><button onclick='menu();'style='font-size:20px;'>X</button>";
}
