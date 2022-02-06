function myClass(){
    var score=0;
    var correctAnswer1=document.form.quiz1.value; 
    var correctAnswer2=document.form.quiz2.value; 
    var correctAnswer3=document.form.quiz3.value; 
    var empty=document.getElementById("empty")
    if (correctAnswer1=="HTML"){score++};
    if (correctAnswer2=="JS"){score++};
    if (correctAnswer3=="NO"){score++};  
    empty.textContent=score;

if (score==3){
    empty.textContent="Your Score is " + score/3*100 + "%. Excellent."
}
else if(score==2){
    empty.textContent="Your Score is " + score/3*100 + "%. Average."
}
else{
    empty.textContent="Your Score is " + score/3*100 + "%. Fail."
}
};
