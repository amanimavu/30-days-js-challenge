const stars = document.querySelectorAll(".star");
const body = document.querySelector("body");

function handleClick() {
  const target = this;
  this.classList.add("limit");

  stars.forEach((star, index) => {
    if (index <= [...stars].indexOf(target)) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

function handleClickOnBody(e) {
  if (e.target.localName === "body") {
    stars.forEach((star) => {
      star.classList.remove("selected");
    });
  }
}

body.addEventListener("click", handleClickOnBody);

function handleTransitionEnd(e) {
  this.classList.remove("limit");
}

stars.forEach((star) => {
  star.addEventListener("click", handleClick);
});

stars.forEach((star) => {
  star.addEventListener("animationend", handleTransitionEnd);
});
