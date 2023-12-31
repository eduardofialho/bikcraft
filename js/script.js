// Active items on header menu
const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

// Active items on budget page
const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activeProduct);

// Common questions
const questions = document.querySelectorAll(".questions button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function questionsEvent(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(questionsEvent);

// Bicycle gallery
const gallery = document.querySelectorAll(".bicycle-images img");
const galleryContainer = document.querySelector(".bicycle-images");

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}

function galleryEvents(img) {
  img.addEventListener("click", changeImage);
}

gallery.forEach(galleryEvents);

// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}
