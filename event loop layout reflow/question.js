const elements = document.querySelectorAll("p");
const rects = [];

for (const element of elements) {
  element.style.width = "50%";
  rects.push(element.getBoundingClientRect());
}
