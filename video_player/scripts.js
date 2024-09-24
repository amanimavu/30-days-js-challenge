const playPauseBtn = document.querySelector("button.toggle");
const player = document.querySelector(".player");
const video = document.querySelector("video");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const volume = document.querySelector("input[name='volume']");
const playbackRate = document.querySelector("input[name='playbackRate']");
const skipButtons = player.querySelectorAll("[data-skip]");
let mousedown = false;

//event handlers
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    playPauseBtn.textContent = this.paused ? "||" : "►";
}

const skip = (step) => {
    video.currentTime += parseFloat(step);
};

function handleProgress() {
    const progress = (this.currentTime / this.duration) * 100;
    progressBar.style.flexBasis = `${progress}%`;
}

function handleSetInitial() {
    progressBar.style.flexBasis = "0%";
}

function handleVolume() {
    video.volume = this.value;
}

function handlePlayBackRate() {
    video.playbackRate = this.value;
}

function handleKeyPress(e) {
    if (e.keyCode === 32) {
        togglePlay();
    }
    if (e.keyCode === 39) {
        skip(25);
    }
    if (e.keyCode === 37) {
        skip(-10);
    }
}

function scrub(e) {
    const ratio = e.offsetX / video.offsetWidth;
    console.log(video.offsetWidth);
    const videoDuration = video.duration;
    const scrubTime = parseFloat(ratio * videoDuration);
    console.log(scrubTime);
    video.currentTime = scrubTime;
}

playPauseBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

skipButtons.forEach((skipBtn) =>
    skipBtn.addEventListener("click", () => skip(skipBtn.dataset.skip))
);

//event listeners
video.addEventListener("timeupdate", handleProgress);

progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => {
    mousedown = true;
});
progress.addEventListener("mouseup", () => {
    mousedown = false;
});
progress.addEventListener("mousemove", (e) => {
    mousedown && scrub(e);
});

volume.addEventListener("input", handleVolume);
playbackRate.addEventListener("input", handlePlayBackRate);

document.addEventListener("DOMContentLoaded", handleSetInitial);
document.addEventListener("keyup", handleKeyPress);
