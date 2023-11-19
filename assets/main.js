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
    profilePic.classList.add("hide");
  } else {
    liOne.classList.remove("showLi");
    profilePic.classList.remove("hide");
  }

  // TWO
  var sectionTwo = document.getElementById("sectionTwo");
  var two = sectionTwo.getBoundingClientRect();
  var liTwo = document.getElementById("liTwo");

  if (two.top <= this.innerHeight * -0.1) {
    liTwo.classList.add("showLi");
  } else {
    liTwo.classList.remove("showLi");
  }

  if (two.top <= this.innerHeight * 1) {
    sectionTwo.classList.add("toLeft");
  } else {
    sectionTwo.classList.remove("toLeft");
  }

  // THREE AND FOUR
  var sectionThree = document.getElementById("sectionThree");
  var three = sectionThree.getBoundingClientRect();

  if (three.top <= this.innerHeight * 1) {
    sectionThree.classList.add("toRight");
  } else {
    sectionThree.classList.remove("toRight");
  }

  // FOUR
  var sectionFour = document.getElementById("sectionFour");
  var four = sectionFour.getBoundingClientRect();

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
  } else {
    liThree.classList.remove("showLi");
  }

  if (five.top <= this.innerHeight * 1) {
    sectionFive.classList.add("toRight");
  } else {
    sectionFive.classList.remove("toRight");
  }

  // SIX
  var sectionSix = document.getElementById("sectionSix");
  var six = sectionSix.getBoundingClientRect();

  // SEVEN
  var sectionSeven = document.getElementById("sectionSeven");
  var seven = sectionSeven.getBoundingClientRect();

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
    liFour.classList.add("showLi");
  } else {
    liFour.classList.remove("showLi");
  }

  if (eight.top <= this.innerHeight * 1) {
    sectionEight.classList.add("toRight");
  } else {
    sectionEight.classList.remove("toRight");
  }
});
