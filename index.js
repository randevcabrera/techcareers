document.querySelectorAll(".sigma").forEach((image) => {
  image.addEventListener("click", () => {
    const imageBox = image.parentElement;
    imageBox.classList.toggle("active");
  });
});

document.querySelectorAll(".sigma2").forEach((image) => {
  image.addEventListener("click", () => {
    const imageBox = image.parentElement;
    imageBox.classList.toggle("active");
  });
});
