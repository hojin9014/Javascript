// JavaScript 반복문 자세히 배우기
// 이 파일은 브라우저 콘솔에서 반복문의 기본 개념과 사용 방법을 단계적으로 확인하도록 작성되었습니다.

console.log("=== 1. 반복문이란 무엇인가 ===");
console.log("반복문은 같은 코드를 여러 번 실행할 때 사용하는 문법입니다.");
console.log("비슷한 작업을 자동으로 처리할 수 있어서 코드를 짧고 효율적으로 만들 수 있습니다.");

console.log("\n=== 2. for 문 기본 형태 ===");
for (let i = 1; i <= 5; i++) {
  console.log("for 문 반복:", i);
}

console.log("for 문은 시작값, 조건식, 증감식을 한 줄에서 관리할 수 있습니다.");

console.log("\n=== 3. for 문의 구조 이해하기 ===");
console.log("for (초기값; 조건식; 증감식) { 실행할 코드 }");
console.log("1. 초기값: 반복을 시작할 변수를 만듭니다.");
console.log("2. 조건식: 이 조건이 true인 동안 반복합니다.");
console.log("3. 증감식: 반복이 한 번 끝날 때마다 값을 바꿉니다.");

console.log("\n=== 4. while 문 ===");
let count = 1;

while (count <= 3) {
  console.log("while 문 반복:", count);
  count++;
}

console.log("while 문은 조건이 true인 동안 계속 반복합니다.");
console.log("반복 안에서 값을 바꾸지 않으면 무한 반복이 될 수 있습니다.");

console.log("\n=== 5. do...while 문 ===");
let number = 1;

do {
  console.log("do...while 반복:", number);
  number++;
} while (number <= 3);

console.log("do...while 문은 조건을 나중에 검사하므로 최소 한 번은 실행됩니다.");

console.log("\n=== 6. 배열과 for 문 ===");
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}번째 과일:`, fruits[i]);
}

console.log("배열은 보통 index를 이용해 반복문으로 순서대로 접근합니다.");

console.log("\n=== 7. for...of 문 ===");
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log("색상:", color);
}

console.log("for...of 문은 배열의 값을 하나씩 꺼내기에 편리합니다.");

console.log("\n=== 8. break 와 continue ===");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("3은 건너뜁니다.");
    continue;
  }

  if (i === 5) {
    console.log("5에서 반복을 종료합니다.");
    break;
  }

  console.log("현재 숫자:", i);
}

console.log("continue 는 이번 반복만 건너뜁니다.");
console.log("break 는 반복문 전체를 즉시 종료합니다.");

console.log("\n=== 9. 중첩 반복문 ===");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`바깥 반복 ${i}, 안쪽 반복 ${j}`);
  }
}

console.log("반복문 안에 또 다른 반복문을 넣는 것을 중첩 반복문이라고 합니다.");

console.log("\n=== 10. 구구단 예제 ===");
for (let dan = 2; dan <= 3; dan++) {
  console.log(`--- ${dan}단 ---`);

  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

console.log("\n=== 11. 무한 반복 주의 ===");
let safeCount = 0;

while (safeCount < 3) {
  console.log("안전한 while 반복:", safeCount);
  safeCount++;
}

console.log("조건이 언젠가 false가 되도록 만들어야 반복문이 끝납니다.");
console.log("값이 계속 바뀌지 않으면 프로그램이 멈춘 것처럼 보일 수 있습니다.");

console.log("\n=== 12. 실전 예제 ===");
const scores = [80, 95, 72, 100, 88];
let total = 0;

for (const score of scores) {
  total += score;
}

const average = total / scores.length;
console.log("총점:", total);
console.log("평균:", average);

if (average >= 90) {
  console.log("평균이 매우 높습니다.");
} else if (average >= 80) {
  console.log("평균이 좋습니다.");
} else {
  console.log("조금 더 연습이 필요합니다.");
}

console.log("\n=== 13. 반복문 선택 팁 ===");
console.log("1. 반복 횟수가 명확하면 for 문이 편리합니다.");
console.log("2. 조건에 따라 반복을 계속해야 하면 while 문이 자연스럽습니다.");
console.log("3. 배열 값을 꺼내는 데는 for...of 문이 읽기 쉽습니다.");
console.log("4. 반복 제어가 필요할 때 break 와 continue 를 사용할 수 있습니다.");

console.log("\n=== 14. 한 줄 정리 ===");
console.log("반복문은 같은 작업을 여러 번 실행할 때 사용하는 핵심 문법입니다.");
console.log("for, while, do...while, for...of 를 상황에 맞게 사용하면 코드를 훨씬 효율적으로 작성할 수 있습니다.");
