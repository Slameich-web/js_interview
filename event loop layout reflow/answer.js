// Layout происходит тогда, когда мы считываем свойства геометрии после изменения

const elements = document.querySelectorAll("p");
const rects = [];

for (const element of elements) {
  element.style.width = "50%";
}
for (const element of elements) {
  rects.push(element.getBoundingClientRect());
}
