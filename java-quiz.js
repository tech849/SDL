document.getElementById("jq1").innerHTML="<html><head><link rel='stylesheet' href='/SDL/input.css'></head><body><p><b>(Q1)COMPLETE THE PROGRAM</b></p><p>LINE:1: public static void main<input type='text' maxlength='15' id='j1'></p><br><p>LINE:2: int a = <input type='text' maxlength='4' id='j2'></p><br><p>LINE:3: int b = 300;</p><br><p>LINE:4: int c = a + b;</p><br><p>LINE:5: System.out.println(c);</p><br><p>LINE:6: }</p><br><p><b>OUTPUT:: 900</b></p><br><button onclick='jq1();'>RUN</button><br><p id='jq1l1'></p><br><p id='jq1l2'></p></body></html>";
// answers
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
