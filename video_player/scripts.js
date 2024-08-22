const playPauseBtn = document.querySelector("button.toggle");
const video = document.querySelector("video");
const progressBar = document.querySelector(".progress__filled");
const volume = document.querySelector("input[name='volume']");
const playbackRate = document.querySelector("input[name='playbackRate']");
const skipBack = document.querySelector(".player__button[data-skip='-10']");
const skipForward = document.querySelector(".player__button[data-skip='25']");

console.dir(video);

function handlePlayPause() {
  if (this.textContent === "►") {
    this.textContent = "||";
    // console.dir(video);
    video.play();
  } else {
    this.textContent = "►";
    video.pause();
  }
}

function handleProgress() {
  // currentTime
  // duration
  const progress = (this.currentTime / this.duration) * 100;

  progressBar.style.flexBasis = `${progress}%`;
}

function handleVideoClick() {
  this.paused ? this.play() : this.pause();
}

function handleVolume() {
  video.volume = this.value;
}

function handlePlayBackRate() {
  video.playbackRate = this.value;
}

function handleSkip() {
  const skipValue = parseFloat(video.currentTime) + parseInt(this.dataset.skip);
  video.currentTime = skipValue;
}

playPauseBtn.addEventListener("click", handlePlayPause);
video.addEventListener("click", handleVideoClick);
video.addEventListener("timeupdate", handleProgress);
volume.addEventListener("input", handleVolume);
playbackRate.addEventListener("input", handlePlayBackRate);
skipBack.addEventListener("click", handleSkip);
skipForward.addEventListener("click", handleSkip);
