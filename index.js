const images = document.querySelectorAll(".sense");
const blurbs = document.querySelectorAll(".watered");
const logo = document.getElementById("logo");
const b1 = "images/joel-muniz-A4Ax1ApccfA-unsplash.jpg";
const b2 = "images/austin-distel-rxpThOwuVgE-unsplash.jpg";
const b3 = "images/brooke-cagle--uHVRvDr7pg-unsplash.jpg";
const jumpToContact = document.getElementById("jumpToContact");
const contacter = document.getElementById("contacter");
const image = document.getElementById("img-flipper");
const clickToScroll = document.getElementById("clickToScroll");
const cultureContent = document.getElementById("ourCulture");

let currentPos = 0;
let images2 = [b1, b2, b3];

jumpToContact.addEventListener("click", () => {
  contacter.scrollIntoView();
  console.log("contact");
});

clickToScroll.addEventListener("click", () => {
  cultureContent.classList.add("clicked");
});

function volgendefoto() {
  if (++currentPos >= images2.length) currentPos = 0;

  image.src = images2[currentPos];
}
setInterval(volgendefoto, 2000);

imgOptions = {
  threshold: 0.6,
};

const imageLooker = new IntersectionObserver((entries, imageLooker) => {
  entries.forEach((entry) => {
    console.log(entry.target.classlist);
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      console.log(entry.target);
      // entry.target.firstChild.classList.remove("watered");

      imageLooker.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imageLooker.observe(image);
});

blurOptions = {
  threshold: 1,
};

const blurLooker = new IntersectionObserver((entries, imageLooker) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("watered");
      imageLooker.unobserve(entry.target);
    }
  });
}, imgOptions);

blurbs.forEach((blur) => {
  blurLooker.observe(blur);
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
      // console.log("!");
      logo.classList.remove("invert");
      // logo.classList.add("invert");
      return;
    } else if (entry.isIntersecting) {
      // console.log("intersect");
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

const footer = document.getElementById("footer");
const bottomLogo = document.getElementById("bottom-logo");

const footOptions = {
  threshold: 0.9,
};
const obsFooter = new IntersectionObserver(function (foots, obsFooter) {
  foots.forEach((foot) => {
    if (!foot.isIntersecting) {
      // console.log("!");
      logo.classList.remove("logo-gone");
      bottomLogo.classList.add("logo-gone");
    } else {
      logo.classList.add("logo-gone");
      bottomLogo.classList.remove("logo-gone");
    }
  });
}, footOptions);

obsFooter.observe(footer);

const formEmail = document.querySelector('input[type="email"]');
const formName = document.querySelector('input[type="text"]');

function verifyName(str) {
  regexp = /^[a-z ,.'-]+$/i;
  if (regexp.test(str)) {
    console.log("pass");
    return true;
  } else {
    console.log("fail");
  }
}

function verifyEmail(str) {
  regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (regexp.test(str)) {
    return true;
  } else {
    console.log("not a valid email");
    return false;
  }
}

const validateFormEntries = () => {
  if (verifyName(formName.value) && verifyEmail(formEmail.value)) {
    console.log("pass both");
  }
};

const validateForm = () => {};

formEmail.addEventListener("focus", (event) => {
  validateFormEntries();
});

formEmail.addEventListener("blur", (event) => {
  validateForm();
});

formEmail.addEventListener("change", (event) => {
  validateForm();
});
formName.addEventListener("change", (event) => {
  validateForm();
});

formName.addEventListener("focus", (event) => {
  validateForm();
});

formName.addEventListener("blur", (event) => {
  validateForm();
});
