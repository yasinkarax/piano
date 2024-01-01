const keys = document.querySelectorAll('.piano button')
const keysL = keys.length;
const audios = document.getElementsByTagName('audio');

// listen keydown events
document.addEventListener('keydown', (e) => {
    const keyV = e.key.toUpperCase();
    audios[keyV].play();
    audios[keyV].currentTime = 0;
})


for (let i = 0; i <= keysL; i += 1) {
    keys[i].addEventListener('click', () => {
        audios[i].currentTime = 0;
        audios[i].play();
    })
}

