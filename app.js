let songEl = document.getElementById('song');
let progressEl = document.getElementById('progress');
let ctrlEl = document.getElementById('ctrlIcon');

songEl.onloadedmetadata = function () {
    progressEl.max = songEl.duration;
    progressEl.value = songEl.currentTime;

    // console.log(progressEl.max);
    // console.log(progressEl.value);
}

//play or pause
function playPause() {
    if (ctrlEl.classList.contains('fa-pause')) {
        songEl.pause();
        ctrlEl.classList.remove('fa-pause');
        ctrlEl.classList.add('fa-play');
    }
    else {
        songEl.play();
        ctrlEl.classList.remove('fa-play');
        ctrlEl.classList.add('fa-pause');
    }
}

//moving to play / pause song
if (songEl.play()) {
    setInterval(() => {
        progressEl.value = songEl.currentTime;
    }, 500);
}

progressEl.onchange = function () {
    songEl.play();
    songEl.currentTime = progressEl.value;
    ctrlEl.classList.remove('fa-play');
    ctrlEl.classList.add('fa-pause');
}
