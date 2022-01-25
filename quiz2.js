question_turn="player_1";
answer_turn="player_2";
player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
     actual_answer=parseInt(number1)* parseInt(number2);
   
    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br><br>Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row=question_number+input_box+check_button;
      document.getElementById("output").innerHTML= row;
      document.getElementById("number1").innerHTML= "";
      document.getElementById("number2").innerHTML= "";
}
function check(){
  get_answer=document.getElementById("input_check_box").value;
  
  if (get_answer==actual_answer) {
    if (answer_turn=="player_1") {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML= player1_score;
    } 
    else{
     player2_score=player2_score+1;
     document.getElementById("player2_score").innerHTML=player2_score;
    } 
  }
  if (question_turn=="player_1") {
      document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
       question_turn="player_2";
  }
else{
   question_turn="player_2";
   document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
   question_turn="player_1";
}
if (answer_turn=="player_1") {
   document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;
   answer_turn="player_2";
}
else{
   answer_turn="player_2";
   document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name;
   answer_turn="player_1";
}
document.getElementById("output").innerHTML="";
}
