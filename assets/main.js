window.addEventListener("scroll", function () {
  // ZERO AND ONE
  var sectionZero = document.getElementById("sectionZero");
  var zero = sectionZero.getBoundingClientRect();

  var heroText = document.getElementById("heroText");
  var sectionOne = document.getElementById("sectionOne");
  var profilePic = document.getElementById("profilePic");
  var one = sectionOne.getBoundingClientRect();
  var liOne = document.getElementById("liOne");

  if (one.top <= this.innerHeight * 0.5) {
    heroText.classList.add("hide");
  } else {
    heroText.classList.remove("hide");
  }

  if (zero.top <= this.innerHeight * 0.2) {
    liOne.classList.add("showLi");
    sectionZero.classList.add("hide");
    profilePic.classList.add("hide");
  } else {
    liOne.classList.remove("showLi");
    sectionZero.classList.remove("hide");
    profilePic.classList.remove("hide");
  }

  if (one.top <= this.innerHeight * -0.2) {
    sectionOne.classList.add("hide");
  } else {
    sectionOne.classList.remove("hide");
  }

  // TWO
  var sectionTwo = document.getElementById("sectionTwo");
  var two = sectionTwo.getBoundingClientRect();
  var liTwo = document.getElementById("liTwo");

  if (two.top <= this.innerHeight * -0.1) {
    liTwo.classList.add("showLi");
    sectionTwo.classList.add("hide");
  } else {
    liTwo.classList.remove("showLi");
    sectionTwo.classList.remove("hide");
  }

  if (two.top <= this.innerHeight * 1) {
    sectionTwo.classList.add("toLeft");
  } else {
    sectionTwo.classList.remove("toLeft");
  }

  // THREE AND FOUR
  var sectionThree = document.getElementById("sectionThree");
  var three = sectionThree.getBoundingClientRect();

  if (three.top <= this.innerHeight * -0.1) {
    sectionThree.classList.add("hide");
  } else {
    sectionThree.classList.remove("hide");
  }

  if (three.top <= this.innerHeight * 1) {
    sectionThree.classList.add("toRight");
  } else {
    sectionThree.classList.remove("toRight");
  }

  // FOUR
  var sectionFour = document.getElementById("sectionFour");
  var four = sectionFour.getBoundingClientRect();

  if (four.top <= this.innerHeight * -0.1) {
    sectionFour.classList.add("hide");
  } else {
    sectionFour.classList.remove("hide");
  }

  if (four.top <= this.innerHeight * 1) {
    sectionFour.classList.add("toLeft");
  } else {
    sectionFour.classList.remove("toLeft");
  }

  // FIVE
  var sectionFive = document.getElementById("sectionFive");
  var five = sectionFive.getBoundingClientRect();
  var liThree = document.getElementById("liThree");

  if (five.top <= this.innerHeight * -0.4) {
    liThree.classList.add("showLi");
    sectionFive.classList.add("hide");
  } else {
    liThree.classList.remove("showLi");
    sectionFive.classList.remove("hide");
  }

  if (five.top <= this.innerHeight * 1) {
    sectionFive.classList.add("toRight");
  } else {
    sectionFive.classList.remove("toRight");
  }

  // SIX
  var sectionSix = document.getElementById("sectionSix");
  var six = sectionSix.getBoundingClientRect();

  if (six.top <= this.innerHeight * -1) {
    sectionSix.classList.add("hide");
  } else {
    sectionSix.classList.remove("hide");
  }

  // SEVEN
  var sectionSeven = document.getElementById("sectionSeven");
  var seven = sectionSeven.getBoundingClientRect();

  if (seven.top <= this.innerHeight * -0.2) {
    sectionSeven.classList.add("hide");
  } else {
    sectionSeven.classList.remove("hide");
  }

  if (seven.top <= this.innerHeight * 1) {
    sectionSeven.classList.add("toLeft");
  } else {
    sectionSeven.classList.remove("toLeft");
  }

  // EIGHT
  var sectionEight = document.getElementById("sectionEight");
  var eight = sectionEight.getBoundingClientRect();
  var liFour = document.getElementById("liFour");

  if (eight.top <= this.innerHeight * -0.2) {
    sectionEight.classList.add("hide");
    liFour.classList.add("showLi");
  } else {
    sectionEight.classList.remove("hide");
    liFour.classList.remove("showLi");
  }

  if (eight.top <= this.innerHeight * 1) {
    sectionEight.classList.add("toRight");
  } else {
    sectionEight.classList.remove("toRight");
  }
});
