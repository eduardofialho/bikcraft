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
