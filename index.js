
'use strict';

const sounds = document.querySelectorAll(".weather_select_container button");
const song = document.querySelector(".song");
const video = document.querySelector(".video_container video");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function() {
    checkPlaying(song);
})

replay.addEventListener("click", function(){
    restartSong(song);
})


const restartSong = song => {
  let currentTime = song.currentTime;
  currentTime = 0;
  console.log("restart!")
}

const checkPlaying = song => {
  if(song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

