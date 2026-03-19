// JavaScript 조건문 자세히 배우기
// 이 파일은 브라우저 콘솔에서 조건문의 흐름을 단계적으로 확인하도록 작성되었습니다.

console.log("=== 1. 조건문이란 무엇인가 ===");
console.log("조건문은 어떤 조건이 참인지 거짓인지에 따라 다른 코드를 실행하는 문법입니다.");
console.log("프로그램이 상황에 맞게 다르게 동작하도록 만들 때 꼭 필요합니다.");

console.log("\n=== 2. if 문 기본 형태 ===");
const age = 20;

if (age >= 19) {
  console.log("성인입니다.");
}

console.log("if 문은 조건이 true일 때만 블록 안의 코드를 실행합니다.");

console.log("\n=== 3. if ~ else 문 ===");
const score = 58;

if (score >= 60) {
  console.log("합격입니다.");
} else {
  console.log("불합격입니다.");
}

console.log("else 는 if 조건이 거짓일 때 실행됩니다.");

console.log("\n=== 4. if ~ else if ~ else 문 ===");
const temperature = 28;

if (temperature >= 30) {
  console.log("매우 덥습니다.");
} else if (temperature >= 20) {
  console.log("적당한 날씨입니다.");
} else if (temperature >= 10) {
  console.log("조금 쌀쌀합니다.");
} else {
  console.log("많이 춥습니다.");
}

console.log("else if 를 사용하면 여러 조건을 순서대로 검사할 수 있습니다.");
console.log("위에서부터 차례대로 검사하고, 처음 true가 되는 블록만 실행됩니다.");

console.log("\n=== 5. 비교 연산자와 함께 쓰기 ===");
const money = 10000;

console.log("money > 5000 ->", money > 5000);
console.log("money < 5000 ->", money < 5000);
console.log("money >= 10000 ->", money >= 10000);
console.log("money <= 9999 ->", money <= 9999);
console.log("money === 10000 ->", money === 10000);
console.log('money === "10000" ->', money === "10000");
console.log('money == "10000" ->', money == "10000");

console.log("\n=== 6. 논리 연산자와 함께 쓰기 ===");
const hasIdCard = true;
const hasTicket = false;

if (age >= 19 && hasIdCard) {
  console.log("성인이고 신분증도 있습니다.");
}

if (age >= 19 || hasTicket) {
  console.log("둘 중 하나라도 참이면 실행됩니다.");
}

if (!hasTicket) {
  console.log("티켓이 없습니다.");
}

console.log("&& 는 둘 다 true일 때 true입니다.");
console.log("|| 는 둘 중 하나만 true여도 true입니다.");
console.log("! 는 true/false를 반대로 바꿉니다.");

console.log("\n=== 7. truthy / falsy 와 조건문 ===");
const userName = "Minsu";
const emptyText = "";
const itemCount = 0;

if (userName) {
  console.log("문자열이 비어 있지 않으면 true처럼 동작합니다.");
}

if (emptyText) {
  console.log("이 문장은 실행되지 않습니다.");
} else {
  console.log('빈 문자열 "" 은 false처럼 동작합니다.');
}

if (itemCount) {
  console.log("이 문장도 실행되지 않습니다.");
} else {
  console.log("숫자 0은 false처럼 동작합니다.");
}

console.log("\n=== 8. 중첩 조건문 ===");
const memberLevel = "gold";
const purchaseAmount = 120000;

if (memberLevel === "gold") {
  if (purchaseAmount >= 100000) {
    console.log("골드 회원이며 10만원 이상 구매해서 무료 배송 대상입니다.");
  } else {
    console.log("골드 회원이지만 구매 금액이 부족합니다.");
  }
} else {
  console.log("골드 회원이 아닙니다.");
}

console.log("조건문 안에 또 다른 조건문을 넣는 것을 중첩 조건문이라고 합니다.");

console.log("\n=== 9. switch 문 ===");
const day = "수요일";

switch (day) {
  case "월요일":
    console.log("한 주의 시작입니다.");
    break;
  case "수요일":
    console.log("주중의 가운데입니다.");
    break;
  case "금요일":
    console.log("주말이 가까워졌습니다.");
    break;
  default:
    console.log("평범한 하루입니다.");
}

console.log("switch 문은 하나의 값을 여러 경우와 비교할 때 유용합니다.");
console.log("break 를 빼면 다음 case까지 계속 실행될 수 있으니 주의해야 합니다.");

console.log("\n=== 10. 삼항 연산자 ===");
const isLoggedIn = true;
const message = isLoggedIn ? "로그인 상태입니다." : "로그아웃 상태입니다.";
console.log(message);

console.log("삼항 연산자는 짧은 조건 분기에 자주 사용합니다.");
console.log("형태는 조건 ? 참일 때 값 : 거짓일 때 값 입니다.");

console.log("\n=== 11. 조건문 작성 팁 ===");
console.log("1. 비교할 때는 가능하면 == 보다 === 를 사용하는 편이 안전합니다.");
console.log("2. 너무 많은 중첩은 읽기 어려우므로 else if, 함수 분리 등을 함께 고려합니다.");
console.log("3. 조건식을 읽었을 때 바로 의미가 보이도록 변수 이름을 명확하게 짓는 것이 좋습니다.");

console.log("\n=== 12. 실전 예제 ===");
const userAge = 17;
const parentPermission = true;

if (userAge >= 19) {
  console.log("혼자 영화 관람이 가능합니다.");
} else if (userAge >= 15 && parentPermission) {
  console.log("보호자 동의가 있어서 관람 가능합니다.");
} else {
  console.log("관람이 어렵습니다.");
}

console.log("\n=== 13. 한 줄 정리 ===");
console.log("조건문은 상황에 따라 다른 코드를 실행하게 해 주는 핵심 문법입니다.");
console.log("if, else if, else, switch, 삼항 연산자를 상황에 맞게 사용하면 코드를 더 명확하게 만들 수 있습니다.");
