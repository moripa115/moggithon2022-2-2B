
'use strict';

const sounds = document.querySelectorAll(".weather_select_container button");
const song = document.querySelector(".song");
const video = document.querySelector(".video_container video");

const play = document.querySelector(".play");
const replay = document.querySelector(".replay");


const outline = document.querySelector(".track-circle");

const timeDisplay = document.querySelectorAll(".time-display");


const timeSelect = document.querySelectorAll(".time_select_container button");
let leftDuration = 600;

timeDisplay.textContent = `${Math.floor(leftDuration / 60)}:${Math.floor(leftDuration % 60)}`;

// outline.style.strokeDashoffset = outlineLength;
// outline.style.strokeDasharray = outlineLength;
// timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
//   fakeDuration % 60
// )}`;

timeSelect.forEach(option => {
  option.addEventListener("click", function() { 
    leftDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(leftDuration / 60)}:${Math.floor(leftDuration % 60)}`;
  });    
});

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

