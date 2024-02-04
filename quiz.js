const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement=document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonElement=document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
var score=0
let qnno=1;
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    qnno++
    setNextQuestion()
})

function startGame(){
    score=0
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random()-.5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer => {
        const button=document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    });
}

function resetState(){
    clearStatusClass(document.body)
    document.getElementById('text').innerHTML="Choose an option";
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if(document.body.classList.contains('correct')){
        score+=1;
        document.getElementById('text').innerHTML+="\n"+score+"/5";
    }else{
        document.getElementById('text').innerHTML+="\n"+score+"/5";
    }
    if (shuffledQuestions.length>currentQuestionIndex+1){
        nextButton.classList.remove('hide')
    }else{
        if(score<5){
            alert("Score: "+score+"/5\nTry again and get all the questions correct to receive a promo code.")
        }
        else{
            var num = Math.floor(Math.random() * 90000) + 10000;
            alert("Score: "+score+"/5\nHere is your Shopee promo code: "+num)
        }
        
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    
    if (correct){
        
        element.classList.add('correct');
       
    }else{
        element.classList.add('wrong');
        
    }

    if(document.body.classList.contains('correct')){
        document.getElementById('text').innerHTML="Well Done!";
    }else{
        document.getElementById('text').innerHTML="Try Again";
    }

}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}

const questions=[
    {
        question:'How can you reset your OCBC Online Banking PIN?',
        answers:[
            {text:'Log in to OCBC Online Banking and go to Services > Reset PIN',correct:true},
            {text:'Visit any OCBC branch',correct:false},
            {text:'Call the customer service hotline',correct:false},
            {text:'Send an email to info@ocbc.com',correct:false},
        ]
    },
    {
        question:'What should you do if you forgot your OCBC Online Banking username?',
        answers:[
            {text:'You cannot recover your username, you must register for a new one',correct:false},
            {text:'Visit any OCBC branch to retrieve your username',correct:false},
            {text:'Call the customer service hotline to reset it',correct:false},
            {text:'Request for username reminder via online banking login page',correct:true},
        ]
    },
    {
        question:'What is the maximum transfer limit for PayNow on OCBC Online Banking?',
        answers:[
            {text:'No maximum limit',correct:false},
            {text: 'S$5,000 per day',correct:false},
            {text: 'S$50,000 per transaction',correct:false},
            {text: 'S$10,000 per day',correct:true}
        ]
    },
    {
        question:'How can you update your mobile number for SMS-OTP?',
        answers:[
            {text:'Via online banking only',correct:false},
            {text: 'Send an email to info@ocbc.com',correct:false},
            {text: 'Through your the ocbc app',correct:false},
            {text: 'Call customer service or visit branch',correct:true}
        ]
    },
    {
        question:'What is the maximum number of payees you can add for PayNow on OCBC?',
        answers:[
            {text:'50',correct:false},
            {text: '20',correct:false},
            {text: '100',correct:false},
            {text: 'No limit',correct:true}
        ]
    }
]