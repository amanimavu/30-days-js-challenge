const inputs = document.querySelectorAll("input");

const handleChange = (event) => {
  const target = event.target;
  const suffix = target.dataset.units || "";
  document.documentElement.style.setProperty(
    `--${target.name}`,
    `${target.value}${suffix}`
  );
};

inputs.forEach((input) => {
  input.addEventListener("input", handleChange);
});
