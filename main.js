function playSound(soundSelector){
    const element = document.querySelector(soundSelector);

    if (element && element.localName === 'audio'){
        element.currentTime = 0;
        element.play();
    }
    else{
        alert(' Invalid selector or element not found');
    }

}


const keyList = document.querySelectorAll('.tecla');

for(let counter = 0; counter < keyList.length; counter++){

    const currentKey = keyList[counter];
    const soundKey = currentKey.classList[1];
    const audioID = `#som_${soundKey}`; // Template String

    currentKey.onclick = function(){
        playSound(audioID);
    }
    
    currentKey.onkeydown = function(event){

        if(event.code === 'Space' || event.code === 'Enter'){
            currentKey.classList.add('ativa');
        }
    }
    currentKey.onkeyup = function(){
        currentKey.classList.remove('ativa');
    }

}
