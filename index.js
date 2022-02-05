function myClass(){
    var score=0;
    var correctAnswer1=document.form.quiz1.value; 
    var correctAnswer2=document.form.quiz2.value; 
    var correctAnswer3=document.form.quiz3.value; 
    var show=document.getElementById("show")
    if (correctAnswer1=="HTML"){score++};
    if (correctAnswer2=="JS"){score++};
    if (correctAnswer3=="NO"){score++};
    document.write(score)
};

if (score==3){
    show.textContent="Your Score is " + Math.floor(score/3*100) + "%. Excellent.".
}
else if(score==2){
    show.textContent="Your Score is " + Math.floor(score/3*100) + "%. Average.".
}
else{
    show.textContent="Your Score is " + Math.floor(score/3*100) + "%. Average.".
}

