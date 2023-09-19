// let tit1 = document.querySelector("h1");
// tit1.style.color = "red";
// tit1.style.fontSize = "100px";
// let tit2 = document.querySelector("h2");
// tit2.style.color = "blue";
// tit2.style.fontSize = "50px";

/* ↑ 초급코드
이런 절차지향적 초급 코드는
일일이 DOM을 제어하기에는 변수 생성부터 특정 기능 구현 로직까지
번거로운 작업을 계속 해야 함
만약 대단위 프로젝트 등에서 반복적인 작업을 할 경우 생산성에 큰 문제가 발생
*/

// => 함수로 패키징하여 코드의 가독성과 생산성을 높이려는 노력

// 위의 코드를 함수패키징해라
// function fontStyle(el, color, size) {
//     let item = document.querySelector(el);
//     item.style.color = color;
//     item.style.fontSize = size;
// }
// fontStyle("h1", "red", '100px');
// fontStyle("h2", "blue", '50px');
/*이 작업은 그나마 효율적으로 하기 위하여 함수를 사용했다
하지만,,,, 만약 안쪽의 기능 구현들이 하나하나 복잡한 로직을 수용해야 할 경우
개별적인 함수의 기능이 복잡해지면서 오히려 생산성이 떨어질 수 있다 */

// => 기능별로 함수를 쪼개는 능력

// function fontStyle(el, color, size) {
//     let item = document.querySelector(el);
//     // item.style.color = color;
//     changeColor(item, color);
//     // item.style.fontSize = size;
//     changeSize(item, size);
// }
// function changeColor(el, color) {
//     el.style.color = color;
// }
// function changeSize(el, size) {
//     el.style.fontSize = size;
// }
// fontStyle("h1", "red", '100px');
// fontStyle("h2", "blue", '50px');

// ---------------------------

// es5 생성자 함수 -> 객체를 생성하기 위한 특별한 함수

// function FontStyle(el) {
//     this.el = document.querySelector(el);
// }
// FontStyle.prototype.changeColor = function(color) {
//     this.el.style.color = color;
// }
// FontStyle.prototype.changeSize = function (size) {
//     this.el.style.fontSize = size;
// }
// let tit1 = new FontStyle('h1');
// console.log(tit1);
// let tit2 = new FontStyle('h2');
// tit1.changeColor('red');
// tit1.changeSize('100px');
// tit2.changeColor('blue');
// tit2.changeSize('50px');
/*
생성자 함수 (어떤 반복적인 대량의 결과물을 뽑아내기 위한 시스템적인 틀)
=> 붕어빵 틀 같은 것

생성자 함수는 객체를 만들기 위한 함수
그러면 생성자 함수를 통해 생성된 실질적인 결과물 즉. 인스턴스(=객체)

프로토타입
- 생성자 함수 생성 시 만들어지는 저장공간
- 동일한 생성자 함수를 통해 생성된 인스턴스들은 모두 동일한 프로토타입을 상속받아
공유한다
- 상속으로 공유된 메소드를 사용함으로써
많은 리소스를 아끼고, 생산성을 높일 수 있음
*/

// 이 상황이 조금 더 많이 쓰인다
// 인스턴스 생성 시 메소드가 무조건 호출되어야 하는 상황일 때
function FontStyle(el, color, size) {
    this.el = document.querySelector(el);
    this.changeColor(color);
    this.changeSize(size);
}
FontStyle.prototype.changeColor = function(color) {
    this.el.style.color = color;
}
FontStyle.prototype.changeSize = function (size) {
    this.el.style.fontSize = size;
}

new FontStyle('h1', 'red', '200px')
new FontStyle('h2', 'blue', '100px')
// 생성하는 곳 적용하는 곳 따로 하면 가독성이 떨어질 수 있음.
// 프토로타입으로 똑같이 만들긴하지만 생성자함수에다가 호출을 바로 함

//위와 같이 생성자 함수를 생성과 동시에 메소드를 호출하게 된다면
// 특정 객체 전용의 메소드를 프로토타입에 등록하여
// (FontStyle)기능별로 카테로라이징(=그룹화) 할 수 있다

// es5 생성자 함수의 단점
// 일반함수와 구별이 어렵다 -> 그래서 암묵적인 규칙이 있는 것 (대문자로 시작한다는 규칙)
// 그래도 구별이 어렵다

// 가장 큰 단점
// 메소드를 모두 프로토타입에 등록해야 한다는 불편

// => 그 결과 class문법(es6)을 사용하게 된다