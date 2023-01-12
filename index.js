console.log("connected");

const images = document.querySelectorAll(".loadMe");
imgOptions = {};

const imageLooker = new IntersectionObserver((entries, imageLooker) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      imageLooker.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imageLooker.observe(image);
});
