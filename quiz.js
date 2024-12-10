const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2, // Index of the correct answer
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1,
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
      correct: 0,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  selectedanswer=null;
  function renderQuestion(q) {
   
    const selectedquestion = questions[q];
     const question_div=document.createElement("div");
     const title_div=document.createElement("div");
     title_div.innerHTML=selectedquestion.question;
     question_div.appendChild(title_div);

  
     const options_show=document.createElement("ul");
     for(let i=0;i<selectedquestion.options.length;i++){
         const option=document.createElement("li");
         const buttonadd=document.createElement("button");
         buttonadd.innerHTML=`option ${i+1}`;
         buttonadd.addEventListener("click", function() {
            selectedanswer=i;
    
            option.style.backgroundColor = "lightblue"; 
       
            const buttons = options_show.querySelectorAll("button");
            buttons.forEach(button => button.disabled = true); 
          
        });
         option.innerHTML=selectedquestion.options[i];
         option.appendChild(buttonadd);
         options_show.appendChild(option);
     }
        question_div.appendChild(options_show);
       const mynextbutton=document.createElement("button");
       mynextbutton.id="nextButton";
       mynextbutton.innerHTML="Next";
         mynextbutton.disabled=false;
            mynextbutton.addEventListener("click",function(){
                handleNext(selectedanswer);
            });
       const restartbutton=document.createElement("button");
         restartbutton.innerHTML="Restart";
         restartbutton.id="restarted";
         restartbutton.disabled=false;
        restartbutton.addEventListener("click",function(){
            restartQuiz();
        });
    originaldom=document.getElementById("quiz-container")
    originaldom.appendChild(question_div);
    originaldom.appendChild(mynextbutton);
    originaldom.appendChild(restartbutton);
  
  }
 
  
  function handleNext(selectedanswer) {
    const selectedquestion = questions[currentQuestionIndex];
    if (selectedquestion.correct === selectedanswer) {
      score++;
    }
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
        const result=document.getElementById("quiz-container");
        result.innerHTML=''; 
      renderQuestion(currentQuestionIndex);
    }
      else{
      renderResult(); 
    }
  }
  
  
  function renderResult() { 
    const result=document.getElementById("quiz-container");
    result.innerHTML=`Your score is ${score}/${questions.length}`;
  }
  

  function restartQuiz() {
    const result=document.getElementById("quiz-container");
    result.innerHTML=''; 
    score=0;
    currentQuestionIndex=0;
    renderQuestion(currentQuestionIndex);
   
  }

renderQuestion(currentQuestionIndex);
