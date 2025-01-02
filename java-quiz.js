
document.getElementById("jq1").innerHTML="<html><head><link rel='stylesheet' href='/SDL/input.css'></head><body><table style='border-collapse:none;'><tr><td><embed src='https://cdn-icons-png.flaticon.com/512/8041/8041359.png' width='50'height='50'></embed></td><td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<embed src='https://cdn-icons-png.flaticon.com/512/9247/9247296.png' width='50'height='50' onclick='helpq1();'></embed></td></tr><tr><td>LEVEL</td><td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HELP</td></tr></table><br><p><b>(Q1)COMPLETE THE PROGRAM</b></p><p>LINE:1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public static void main<input type='text' maxlength='15' id='j1'></p><br><p>LINE:2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; int a = <input type='text' maxlength='4' id='j2'></p><br><p>LINE:3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int b = 300;</p><br><p>LINE:4: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int c = a + b;</p><br><p>LINE:5: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; System.out.println(c);</p><br><p>LINE:6: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</p><br><p><b>OUTPUT:: 900</b></p><br><button onclick='jq1();'>RUN</button><br><p id='jq1l1'></p><br><p id='jq1l2'></p></body></html>";
// answers


//question 1

function helpq1(){
document.getElementById("jq1").innerHTML="<h4 style='color:white;cursor:pointer;' onclick='normalq1();'>BACK</h4><br>LINE:1: public static void main(String[]args){";
}

//reset
function normalq1(){
location.reload();
}

function jq1(){
  var jq1in =document.getElementById("j1").value;
  if(jq1in == "(String[]args){"){
    document.getElementById("jq1l1").innerHTML="Correct !";
  }
  else{
    document.getElementById("jq1l1").innerHTML="Error !";
  }
  var jq1in =document.getElementById("j2").value;
  if(jq1in == "600;"){
    document.getElementById("jq1l2").innerHTML="Correct !";
  }
  else{
    document.getElementById("jq1l2").innerHTML="Error !";
  }
}
