const handleClick = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.add("active");
};

const removeTransition = (event) => {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("active");
};

if (typeof window !== "undefined") {
  window.addEventListener("keydown", handleClick);

  const keys = document.querySelectorAll(".drum-key");
  keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
  });
}
