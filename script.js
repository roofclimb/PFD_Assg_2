let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');


menu.onclick=()=>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


window.onscroll=()=>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
// javascript from 6.59

/* const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;
const textToSpeech =() => {
  const synth =window.speechSynthesis;
  const text = textarea.value;

  if(!synth.speaking && text){
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }

  if(text.length > 50){
    if(synth.speaking && isSpeaking){
      button.innerText ="Pause";
      synth.resume();
      isSpeaking = false;
    }else{
      button.innerText ="Resume";
      synth.resume();
      isSpeaking = true;
    }
  }else{
    isSpeaking =false 
    button.innerText ="Convert to Speech";
  }

  setInterval(() => {
    if(!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      button.innerText = "Convert to Speech";
    }
      })
};
button.addEventListener("click", textToSpeech);

 */
let calcScrollValue=()=>{
  let scrollProgress=document.getElementById('progress');
  let progressValue=document.getElementById('progress-value');
  let pos=document.documentElement.scrollTop;
  let calcHeight=
  document.documentElement.scrollHeight-
  document.documentElement.clientHeight;
  let scrollValue=Math.round((pos*100)/calcHeight);
  if (pos>100){
      scrollProgress.style.display='grid';
  }
  else{
      scrollProgress.style.display='none';
  }
  scrollProgress.addEventListener('click',()=>{
      document.documentElement.scrollTop=0;

  });
  scrollProgress.style.background=`conic-gradient(#FF0000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
};



window.onscroll=calcScrollValue;
window.onload=calcScrollValue;
