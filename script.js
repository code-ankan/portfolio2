function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.loop = true;
    audio.play();
}
playSound("bgmusic1.mp3");