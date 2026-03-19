// JavaScript 함수 선언식과 호출식
// 이 파일은 브라우저 콘솔에서 함수 선언식과 호출식의 개념을 이해하고 실습하도록 작성되었습니다.

console.log("=== 1. 함수 선언식이란 무엇인가 ===");
console.log("함수 선언식은 function 키워드로 함수를 만드는 문법입니다.");
console.log("쉽게 말해, 나중에 사용할 기능을 이름 붙여 미리 정의해 두는 것입니다.");

function sayHello() {
  console.log("안녕하세요. 저는 sayHello 함수입니다.");
}

console.log("위의 sayHello 함수는 선언만 된 상태입니다.");
console.log("함수를 선언했다고 해서 바로 실행되지는 않습니다.");

console.log("\n=== 2. 호출식이란 무엇인가 ===");
console.log("호출식은 이미 만들어 둔 함수를 실제로 실행하는 코드입니다.");
console.log("함수 이름 뒤에 괄호 () 를 붙이면 호출식이 됩니다.");

sayHello();

console.log("sayHello(); 이 한 줄이 바로 함수 호출식입니다.");

console.log("\n=== 3. 선언식과 호출식의 차이 ===");
console.log("함수 선언식: 기능을 만든다.");
console.log("함수 호출식: 만들어 둔 기능을 실행한다.");
console.log("즉, 선언은 준비 단계이고 호출은 실행 단계입니다.");

console.log("\n=== 4. 선언만 하고 호출하지 않으면? ===");
function notCalledFunction() {
  console.log("이 문장은 함수가 호출될 때만 보입니다.");
}

console.log("notCalledFunction 함수는 선언되어 있지만 아직 호출하지 않았습니다.");
console.log("그래서 함수 내부의 문장은 아직 실행되지 않았습니다.");

console.log("\n=== 5. 여러 번 호출하기 ===");
function printWelcome() {
  console.log("환영합니다!");
}

printWelcome();
printWelcome();
printWelcome();

console.log("한 번 선언한 함수는 필요할 때 여러 번 호출할 수 있습니다.");

console.log("\n=== 6. 매개변수가 있는 선언식과 호출식 ===");
function greetUser(name) {
  console.log(`${name}님, 반갑습니다.`);
}

greetUser("Minsu");
greetUser("Jisu");

console.log("선언식에서 받는 name은 매개변수입니다.");
console.log('호출식에서 넣는 "Minsu", "Jisu"는 인수입니다.');

console.log("\n=== 7. 값을 반환하는 함수 ===");
function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(10, 20);
console.log("addNumbers(10, 20)의 결과:", sum);
console.log("호출식은 실행 결과값을 만들 수도 있습니다.");

console.log("\n=== 8. 호출식이 식(expression)인 이유 ===");
const message = greetMessage("JavaScript");

function greetMessage(subject) {
  return `${subject} 공부를 시작합니다.`;
}

console.log("message:", message);
console.log("greetMessage(\"JavaScript\") 는 실행 결과를 만드는 식입니다.");

console.log("\n=== 9. 실습 1: 계산 함수 만들고 호출하기 ===");
function multiplyNumbers(x, y) {
  return x * y;
}

console.log("3 x 4 =", multiplyNumbers(3, 4));
console.log("5 x 6 =", multiplyNumbers(5, 6));

console.log("실습 포인트: 함수는 한 번 선언해 두면 다른 값으로 계속 호출할 수 있습니다.");

console.log("\n=== 10. 실습 2: 점수 판정 함수 ===");
function checkPass(score) {
  if (score >= 60) {
    return "합격입니다.";
  }

  return "불합격입니다.";
}

console.log("점수 85:", checkPass(85));
console.log("점수 40:", checkPass(40));

console.log("\n=== 11. 실습 3: 주문 금액 계산 ===");
function getFinalPrice(price, discount) {
  return price - price * (discount / 100);
}

console.log("10000원에서 10% 할인:", getFinalPrice(10000, 10));
console.log("25000원에서 20% 할인:", getFinalPrice(25000, 20));

console.log("\n=== 12. 자주 하는 실수 ===");
console.log("1. 함수 이름만 쓰고 괄호를 붙이지 않으면 호출되지 않습니다.");
console.log("2. 선언식과 호출식을 헷갈리면 함수가 왜 실행되지 않는지 이해하기 어렵습니다.");
console.log("3. return 이 없는 함수는 결과값이 필요할 때 사용할 수 없습니다.");

console.log("\n=== 13. 핵심 정리 ===");
console.log("function hello() {} 는 함수 선언식입니다.");
console.log("hello() 는 함수 호출식입니다.");
console.log("선언식은 함수를 만들고, 호출식은 함수를 실행합니다.");

console.log("\n=== 14. 한 줄 정리 ===");
console.log("함수 선언식은 기능을 만드는 코드이고, 호출식은 그 기능을 실제로 실행하는 코드입니다.");
