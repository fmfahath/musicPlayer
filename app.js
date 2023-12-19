const imgEl = document.getElementById('img');
const songEl = document.getElementById('song');
const progressEl = document.getElementById('progress');
const playPauseBtnEl = document.getElementById('playPause-btn');

songEl.onloadedmetadata = function(){
    progressEl.max = songEl.duration;
    progressEl.value = songEl.currentTime;

    // console.log(progressEl.max, progressEl.value)
};

//play or pause
function playPause(){
    if(playPauseBtnEl.classList.contains('fa-pause')){
          songEl.pause();
          playPauseBtnEl.classList.remove('fa-pause');
          imgEl.classList.remove('play-mode');
          playPauseBtnEl.classList.add('fa-play');
    }
    else{
      songEl.play();
      playPauseBtnEl.classList.remove('fa-play');
      playPauseBtnEl.classList.add('fa-pause');
      imgEl.classList.add('play-mode');
     
    }
  }

//moving to play / pause song
if(songEl.play()){
    setInterval(() => {
      progressEl.value = songEl.currentTime;
    }, 500);
  }

  progressEl.onchange = function(){
    songEl.play();
    songEl.currentTime = progressEl.value
    playPauseBtnEl.classList.remove('fa-play');
    playPauseBtnEl.classList.add('fa-pause');
  
  }
