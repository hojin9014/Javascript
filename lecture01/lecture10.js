// JavaScript 함수 선언과 호출
// 이 파일은 브라우저 콘솔에서 함수의 개념과 사용 방법을 단계적으로 확인하도록 작성되었습니다.

console.log("=== 1. 함수란 무엇인가 ===");
console.log("함수는 여러 줄의 코드를 하나의 이름으로 묶어 두는 기능입니다.");
console.log("필요할 때 이름으로 실행할 수 있어서, 같은 코드를 반복해서 쓰지 않아도 됩니다.");

console.log("\n=== 2. 함수 선언 기본 형태 ===");
function sayHello() {
  console.log("안녕하세요!");
}

console.log("함수를 선언만 하면 아직 실행되지는 않습니다.");
console.log("이름 뒤에 괄호를 붙여 호출해야 실제로 실행됩니다.");

console.log("\n=== 3. 함수 호출하기 ===");
sayHello();
sayHello();

console.log("한 번 선언한 함수는 여러 번 다시 호출할 수 있습니다.");

console.log("\n=== 4. 매개변수(parameter)와 인수(argument) ===");
function greet(name) {
  console.log(`${name}님, 반갑습니다.`);
}

greet("Minsu");
greet("Jisu");

console.log("함수 선언 쪽의 name은 매개변수입니다.");
console.log('함수를 호출할 때 넣는 "Minsu", "Jisu" 같은 값은 인수입니다.');

console.log("\n=== 5. 여러 개의 매개변수 ===");
function add(x, y) {
  console.log("두 수의 합:", x + y);
}

add(3, 5);
add(10, 20);

console.log("매개변수를 여러 개 사용하면 함수에 여러 값을 전달할 수 있습니다.");

console.log("\n=== 6. return 으로 값 반환하기 ===");
function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 6);
console.log("multiply(4, 6)의 결과:", result);
console.log("return 은 함수의 실행 결과를 바깥으로 돌려줍니다.");

console.log("\n=== 7. return 이후 코드는 실행되지 않음 ===");
function checkNumber(num) {
  if (num > 0) {
    return "양수입니다.";
  }

  return "0 또는 음수입니다.";
}

console.log("checkNumber(5):", checkNumber(5));
console.log("checkNumber(-2):", checkNumber(-2));

console.log("\n=== 8. 기본값 매개변수 ===");
function introduce(name = "이름없음", age = 0) {
  console.log(`이름: ${name}, 나이: ${age}`);
}

introduce("Minsu", 20);
introduce("Jisu");
introduce();

console.log("값을 전달하지 않으면 기본값이 사용됩니다.");

console.log("\n=== 9. 함수 선언식과 함수 표현식 ===");
function declaredFunction() {
  console.log("이것은 함수 선언식입니다.");
}

const expressedFunction = function () {
  console.log("이것은 함수 표현식입니다.");
};

declaredFunction();
expressedFunction();

console.log("함수 선언식은 function 이름() 형태입니다.");
console.log("함수 표현식은 함수를 변수에 저장하는 방식입니다.");

console.log("\n=== 10. 화살표 함수 ===");
const divide = (a, b) => {
  return a / b;
};

console.log("divide(10, 2):", divide(10, 2));
console.log("화살표 함수는 짧게 함수를 작성할 때 자주 사용합니다.");

console.log("\n=== 11. 함수와 스코프 ===");
const outsideMessage = "바깥 변수";

function showScope() {
  const insideMessage = "함수 안 변수";
  console.log(outsideMessage);
  console.log(insideMessage);
}

showScope();

console.log("함수 안에서는 바깥 변수를 사용할 수 있습니다.");
console.log("하지만 함수 안에서 만든 변수는 함수 밖에서 바로 사용할 수 없습니다.");

console.log("\n=== 12. 실전 예제 ===");
function calculatePrice(price, discountPercent) {
  const discountAmount = price * (discountPercent / 100);
  return price - discountAmount;
}

const finalPrice = calculatePrice(10000, 20);
console.log("원래 가격:", 10000);
console.log("할인율:", "20%");
console.log("최종 가격:", finalPrice);

console.log("\n=== 13. 함수를 사용하는 이유 ===");
console.log("1. 같은 코드를 여러 번 쓰지 않아도 됩니다.");
console.log("2. 기능별로 코드를 나눌 수 있어서 읽기 쉬워집니다.");
console.log("3. 수정할 때 한 곳만 바꾸면 되어 관리가 편해집니다.");

console.log("\n=== 14. 한 줄 정리 ===");
console.log("함수는 특정 작업을 묶어 두고 필요할 때 호출해서 실행하는 문법입니다.");
console.log("함수를 잘 활용하면 코드의 재사용성과 가독성이 훨씬 좋아집니다.");
