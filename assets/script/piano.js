const keys = document.querySelectorAll('.piano button')
const keysL = keys.length;
const audios = document.getElementsByTagName('audio');

for(let i = 0; i <= keysL; i+=1){
    keys[i].addEventListener('click', () => {
        audios[i].currentTime = 0;
        audios[i].play();
    })
}