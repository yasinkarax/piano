const keys = document.querySelectorAll('.piano button')
const keysL = keys.length;
const audios = document.getElementsByTagName('audio');
const wKeys = document.querySelectorAll('.white-button');
const bKeys = document.querySelectorAll('.black-button');
// wKeys[0].innerHTML = "A"

for(let i = 0; i <= keysL; i+=1){
    keys[i].addEventListener('click', () => {
        audios[i].currentTime = 0;
        audios[i].play();
    })
}