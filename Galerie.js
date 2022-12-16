var pageNumber = 0;

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".prev");
const sliderVar = document.querySelector(".Slider");

const body = document.querySelector("body");
const text = document.querySelector("h1");

const content = [
  {
    backgroundImage: "url('Images/Bannière.png')",
  },
  {
    backgroundImage: "url('Images/Map/map dbdl among us final 1.png')",
  },
  {
    backgroundImage: "url('Images/Map/map dbdl among us gen 1.png')",
  },
  {
    backgroundImage: "url('Images/Map/map dbdl among us palette 1.png')",
  },
  {
    backgroundImage: "url('Images/Map/map dbdl among us porte 1.png')",
  },
];

document.addEventListener("keyup", function (event) {
  if (event.key == "ArrowRight") {
    next();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key == "ArrowLeft") {
    previous();
  }
});

const next = function () {
  pageNumber = pageNumber + 1;
  if (pageNumber >= 5) {
    pageNumber = 0;
  }
  updateText();
};

const previous = function () {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = 4;
  }
  updateText();
};

const updateText = function () {
  console.log("update");
  //text.innerHTML = content[pageNumber].text;
  sliderVar.style.backgroundImage = content[pageNumber].backgroundImage;
  sliderVar.style.backgroundColor = "#000000";
};

updateText();
