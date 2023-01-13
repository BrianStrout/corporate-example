console.log("connected");
const images = document.querySelectorAll(".loadMe");
const logo = document.getElementById("logo");
imgOptions = {
  //   rootMargin: "100px 0px 0px 0px",
  threshold: 0.5,
};

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

const contentBody = document.getElementById("body-shell");
const bodyoptions = {
  threshold: 0.1,
};
const bodyEnterWAtch = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      //   entry.target.classList.add("test");
      logo.classList.toggle("invert");

      // imageLooker.unobserve(entry.target);
    }
  });
}, bodyoptions);

bodyEnterWAtch.observe(contentBody);

//   images.forEach((image) => {
//     imageLooker.observe(image);
//   });

const culture = document.getElementById("culture");

const obsEnterringCulture = new IntersectionObserver();

const b1 = "images/abg-ce.webp";
const b2 = "images/abg-hf.webp";
const b3 = "images/abg-ho.webp";

let image = document.getElementById("img-flipper");

let currentPos = 0;
let images2 = [b1, b2, b3];

function volgendefoto() {
  if (++currentPos >= images2.length) currentPos = 0;

  image.src = images2[currentPos];
}

// brianSecondPage.src = b1;

setInterval(volgendefoto, 2000);
// const body = document.body;
