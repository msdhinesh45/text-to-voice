function textToAudio(){

    let msg = document.querySelector('.text-area').value;
    let speech  = new SpeechSynthesisUtterance();
    
    speech.lang="en-UK";
    speech.text = msg;
    speech.volume =1;
    speech.rate=0.7;
    speech.pitch=1;

    speechSynthesis.speak(speech);
}