function fontStyle(el, color, size) {
    let item = document.querySelector(el);
    fontColor(item, color);
    fontSize(item, size);
}
function fontColor(el, color) {
    el.style.color = color
}
function fontSize(el, size) {
    el.style.fontSize = size
}
fontStyle("h1", "yellow", "200px");
fontStyle("h2", "green", "50px");

// color, fontsize랑 요소만 바뀌니까 바뀌는 애들만 묶어서 함수패키징