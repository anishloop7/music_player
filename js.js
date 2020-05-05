var songsList = ['BELIVER.mp3', 'BEST OF ME.mp3', 'CRADLES.mp3', 'DESTINY.mp3', 'DESPACITO.mp3', 'FIGHT BACK.mp3', 'RUMORS.mp3', 'TILL I COLLAPSE.mp3', 'UNSTOPPABLE.mp3', 'WHATEVER IT TAKES.mp3'];
var poster = ['BELIVER.jpg', 'BEST OF ME.jpg', 'CRADLES.jpg', 'DESTINY.jpg', 'DESPACITO.jpg', 'FIGHT BACK.jpg', 'RUMORS.jpg', 'TILL I COLLAPSE.jpg', 'UNSTOPPABLE.jpg', 'WHATEVER IT TAKES.jpg'];
var fill = document.getElementById('fill');
var handler = document.getElementById('handler');
var song = new Audio();
var currentSong = 0;
var image = document.getElementById('playImg');
var backgroundImg = document.getElementById('backgroundImg');
var displayImg = document.getElementById('displayImg');

window.onload = playSong();

function playSong() {
    song.src = songsList[currentSong];
    song.play();
}
function functionPlay() {
    if (song.paused) {
        song.play();
        image.src = 'Pause.png';
    } else {
        song.pause();
        image.src = 'Play.png';
    }
}

song.addEventListener('timeupdate', function () {
    var pos = song.currentTime / song.duration;
    fill.style.width = pos * 100 + '%';
    handler.style.marginLeft = pos * 100 + '%';
});

function functionNext() {
    currentSong += 1;
    if (currentSong >= songsList.length) {
        currentSong = 0;
    }
    playSong();
    image.src = 'Pause.png';
    displayImg.src = poster[currentSong];
    backgroundImg.src = poster[currentSong];
}

function functionPre() {
    currentSong -= 1;
    if (currentSong < 0) {
        currentSong = songsList.length - 1;
    }
    playSong();
    image.src = 'Pause.png';
    displayImg.src = poster[currentSong];
    backgroundImg.src = poster[currentSong];
};
var muteBtn = document.getElementById('muteBtn');
function functionMute() {
    if (song.muted == false) {
        song.muted = true;
        muteBtn.innerHTML = 'UNMUTE';
    }
    else {
        song.muted = false;
        muteBtn.innerHTML = 'MUTE';
    }
};
var volumeBtn = document.getElementById('volumeBtn');
volumeBtn.addEventListener('change', function () {
    song.volume = volumeBtn.value;
});
var availSongs = document.getElementById('availSongs');
let str = '';
for (i = 0; i < songsList.length; i++) {
    str += `<button id="${i}" class= "availSongsBtn" onclick="functionClicked(this.id)" style="background-color:seashell; cursor: pointer; color: purple; border:none; height:30px; width:300px" >
            <li >${songsList[i]}</li>
            </button><hr>`
            
}
availSongs.innerHTML = str;
//console.log(availSongs)
//var search = document.getElementById('search');
function functionClicked(index){
    let selectedSong = index;
    //console.log(selectedSong);
    currentSong = selectedSong;
    playSong();
    image.src = 'Pause.png';
    displayImg.src = poster[currentSong];
    backgroundImg.src = poster[currentSong];
}