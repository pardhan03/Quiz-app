const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:false},
            {text:"Elephant",correct:false},
            {text:"Giraff",correct:true},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentIndex=0;
let score=0;

function startQuiz(){
    currentIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion=questions[currentIndex];
    let questionNo=currentIndex+1+"."+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        // creating a new button and add to button in the page
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        // answer correct is the value given in the data
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",seletanswer);
    })
}

// function if there is any previously added option
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function seletanswer(e){
    const selectedbtn=e.target;
    const isCorrect=selectedbtn.dataset.correct==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true");
        {
            button.classList.add("correc");
        }
        button,disabled=true;
    })
    nextButton.style.display="block";
}

startQuiz();