//make toggle effect for the theme
// const themebuttn = document.getElementsByClassName("themebutton");
// console.log(themebuttn);
// themebuttn.addEventListener("click", function () {
//   console.log("clicked");
// });
const heading = document.getElementsByClassName("heading");
const slideContainer = document.getElementById("carousel");
const contentbox = document.getElementsByClassName("carousel");
const themebuttn = document.getElementsByClassName("themebutton");
const body = document.getElementsByClassName("body");
backgroundtheme = () => {
  console.log("clicked bg");
  for (i = 0; i < body.length; i++) {
    body[i].classList.toggle("theme-dark");
  }
};
headingTheme = () => {
  console.log("heading clicked");
  for (i = 0; i < heading.length; i++) {
    heading[i].classList.toggle("text-theme-dark");
  }
};
contentTheme = () => {
  console.log("contentbox clicked");
  for (i = 0; i < contentbox.length; i++) {
    contentbox[i].classList.toggle("content-theme-dark");
  }
};
// dark theme implement start
// const toggle = document.getElementById("toggle");
// // const body = document.body;

// toggle.addEventListener("input", (e) => {
//   const isChecked = e.target.checked;

//   if (isChecked) {
//     body.classList.add("dark-theme");
//   } else {
//     body.classList.remove("dark-theme");
//   }
// });
//dark theme implement end
for (i = 0; i < themebuttn.length; i++) {
  themebuttn[i].addEventListener("click", function () {
    // console.log("clicked button");
    this.classList.toggle("theme-dark-btn");
    backgroundtheme();
    headingTheme();
    contentTheme();
  });
}
//select image, quote, name and position
const dogImageDiv = document.getElementById("author-img");
const dogButnleft = document.getElementById("btn--left");
const dogButnright = document.getElementById("btn--right");
const image = document.getElementsByClassName("author-img");

const testimonial = document.getElementsByClassName("testimonial");

//select left and right button
const but = document.querySelector(".btn"); //selects only left
//select the dots
let dots = document.getElementsByClassName("dot");
for (i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    console.log("clicked button");
    // this.classList.toggle("dot--fill");
    if (this.classList.contains("dot--fill")) {
      this.classList.remove("dot--fill");
    } else {
      this.classList.add("dot--fill");
    }
  });
}
but.addEventListener("click", function () {});

const dog = async () => {
  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.message));
  const url = "https://dog.ceo/api/breeds/image/random";
  const quoteurl = "https://api.quotable.io/random";
  // const url="https://api.quotable.io/random?tags=technology,famous-quotes"
  const response = await fetch(url);
  const data = await response.json();
  // dogImageDiv.innerHTML = `<img src='${data.message}'/>`;
  console.log(data.message);
  // dogImageDiv.innerHTML = src='data.message';
  dogImageDiv.src = data.message;
};
const quote = document.getElementById("text");
const quotedog = async () => {
  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.message));
  const quoteurl = "https://api.quotable.io/random";
  // const url="https://api.quotable.io/random?tags=technology,famous-quotes"
  const response = await fetch(quoteurl);
  const data = await response.json();
  // dogImageDiv.innerHTML = `<img src='${data.message}'/>`;
  console.log(data.content);
  // dogImageDiv.innerHTML = src='data.message';
  quote.innerText = data.content;
};
const authorName = document.getElementById("author-name");
const authorname = async () => {
  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.message));
  const quoteurl = "https://api.quotable.io/random";
  // const url="https://api.quotable.io/random?tags=technology,famous-quotes"
  const response = await fetch(quoteurl);
  const data = await response.json();
  // dogImageDiv.innerHTML = `<img src='${data.message}'/>`;
  console.log(data.author);
  // dogImageDiv.innerHTML = src='data.message';
  authorName.innerText = data.author;
};

dogButnleft.onclick = () => {
  // titan();
  dog();
  quotedog();
  authorname();
};
dogButnright.onclick = () => {
  // titan();
  dog();
  quotedog();
  authorname();
};
