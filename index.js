function myClass(){
    var score=1;
    var correctAnswer1=document.form.qst1.value; 
    var correctAnswer2=document.form.qst2.value; 
    var correctAnswer3=document.form.qst3.value; 
    var result=document.getElementById("result");
    if (correctAnswer1=="HTML"){score++};
    if (correctAnswer2=="JS"){score++};
    if (correctAnswer3=="NO"){score++};  
    result.textContent=score;

if (score==3){
    result.textContent="Your Score is " + Math.floor(score/3*100) + "%"+ ". Excellent."
}
else if(score==2){
    result.textContent="Your Score is " + Math.floor(score/3*100) + "%"+ ". Average."
}
else{
    result.textContent="Your Score is " + Math.floor(score/3*100) + "%"+ ". Fail."
}
};
