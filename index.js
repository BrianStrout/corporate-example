console.log("connected");
const images = document.querySelectorAll(".loadMe");
const logo = document.getElementById("logo");
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
setInterval(volgendefoto, 2000);

imgOptions = {
  threshold: 0.2,
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
  threshold: 0.15,
  //   rootMargin: "200px 0px 0px 0px",
};

const bodyEnterWatch = new IntersectionObserver(function (
  entries,
  bodyEnterWatch
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      console.log("!");
      logo.classList.remove("invert");
      // logo.classList.add("invert");
      return;
    } else if (entry.isIntersecting) {
      console.log("intersect");
      logo.classList.add("invert");
    }
  });
},
bodyoptions);

bodyEnterWatch.observe(contentBody);

const culture = document.getElementById("culture");
const cultOptions = {
  threshold: 0.5,
};
const obsEnterringCulture = new IntersectionObserver(function (
  cults,
  obsEnterringCulture
) {
  cults.forEach((cult) => {
    if (!cult.isIntersecting) {
      logo.classList.remove("logo-right");
    } else {
      logo.classList.add("logo-right");
    }
  });
},
cultOptions);

obsEnterringCulture.observe(culture);

const contacter = document.getElementById("contacter");
const contOptions = {
  //   threshold: 0.5,
};
const obsEnterringContact = new IntersectionObserver(function (
  cults,
  obsEnterringCulture
) {
  cults.forEach((cult) => {
    if (!cult.isIntersecting) {
      return;
    } else {
      logo.classList.add("logo-right");
    }
  });
},
cultOptions);

obsEnterringContact.observe(contacter);
