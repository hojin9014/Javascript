// JavaScript var, let, const 차이와 스코프 개념
// 이 파일은 브라우저 콘솔에서 변수 선언 방식과 스코프를 자세히 이해하도록 작성되었습니다.

console.log("=== 1. 변수 선언이란 무엇인가 ===");
console.log("변수 선언은 값을 저장할 이름표를 만드는 것입니다.");
console.log("JavaScript에서는 대표적으로 var, let, const로 변수를 선언합니다.");

console.log("\n=== 2. var, let, const의 기본 차이 ===");
console.log("var: 오래된 방식의 변수 선언");
console.log("let: 값이 바뀔 수 있는 현대적인 변수 선언");
console.log("const: 다시 다른 값을 넣을 수 없는 상수형 선언");

console.log("\n=== 3. 기본 선언 예제 ===");
var oldMessage = "var 선언";
let userName = "Minsu";
const classroom = "JavaScript";

console.log("oldMessage:", oldMessage);
console.log("userName:", userName);
console.log("classroom:", classroom);

console.log("\n=== 4. 재선언과 재할당 ===");
var score = 80;
var score = 90;
console.log("var는 재선언 가능:", score);

let level = 1;
level = 2;
console.log("let은 재할당 가능:", level);

const PI = 3.14;
console.log("const 값:", PI);

try {
  eval("let age = 10; let age = 20;");
} catch (error) {
  console.log("let 재선언 오류:", error.message);
}

try {
  eval("const TAX = 0.1; TAX = 0.2;");
} catch (error) {
  console.log("const 재할당 오류:", error.message);
}

console.log("\n=== 5. 스코프(scope)란 무엇인가 ===");
console.log("스코프는 변수를 사용할 수 있는 범위입니다.");
console.log("어디에서 선언했는지에 따라 접근 가능한 범위가 달라집니다.");

console.log("\n=== 6. 전역 스코프와 지역 스코프 ===");
const globalMessage = "나는 전역 변수입니다.";

function showScopeExample() {
  const localMessage = "나는 함수 안의 지역 변수입니다.";
  console.log(globalMessage);
  console.log(localMessage);
}

showScopeExample();

console.log("전역 변수는 함수 밖에서도 만들고, 함수 안에서도 접근할 수 있습니다.");
console.log("지역 변수는 함수 안에서만 사용할 수 있습니다.");

try {
  console.log(localMessage);
} catch (error) {
  console.log("지역 변수 바깥 접근 오류:", error.message);
}

console.log("\n=== 7. 함수 스코프와 블록 스코프 ===");
console.log("var는 함수 스코프를 가집니다.");
console.log("let과 const는 블록 스코프를 가집니다.");
console.log("블록은 보통 중괄호 {} 로 감싸진 영역입니다.");

if (true) {
  var varText = "var는 블록 밖에서도 살아남습니다.";
  let letText = "let은 블록 안에서만 보입니다.";
  const constText = "const도 블록 안에서만 보입니다.";

  console.log("블록 안 var:", varText);
  console.log("블록 안 let:", letText);
  console.log("블록 안 const:", constText);
}

console.log("블록 밖 var:", varText);

try {
  console.log(letText);
} catch (error) {
  console.log("블록 밖 let 접근 오류:", error.message);
}

try {
  console.log(constText);
} catch (error) {
  console.log("블록 밖 const 접근 오류:", error.message);
}

console.log("\n=== 8. 함수 안의 var는 함수 밖에서 보일까 ===");
function createFunctionScope() {
  var insideVar = "함수 안 var";
  let insideLet = "함수 안 let";
  const insideConst = "함수 안 const";

  console.log(insideVar);
  console.log(insideLet);
  console.log(insideConst);
}

createFunctionScope();

try {
  console.log(insideVar);
} catch (error) {
  console.log("함수 밖 insideVar 접근 오류:", error.message);
}

console.log("var도 함수 안에서 선언하면 함수 밖에서는 접근할 수 없습니다.");

console.log("\n=== 9. for 문에서의 스코프 차이 ===");
for (var i = 0; i < 3; i++) {
  console.log("var for문 i:", i);
}
console.log("for문 밖 var i:", i);

for (let j = 0; j < 3; j++) {
  console.log("let for문 j:", j);
}

try {
  console.log(j);
} catch (error) {
  console.log("for문 밖 let j 접근 오류:", error.message);
}

console.log("\n=== 10. 호이스팅(hoisting) ===");
console.log("호이스팅은 선언이 위로 끌어올려진 것처럼 보이는 현상입니다.");

console.log("var 선언 전 접근:", beforeVar);
var beforeVar = "var는 선언만 먼저 처리되어 undefined가 보일 수 있습니다.";
console.log("var 선언 후 접근:", beforeVar);

try {
  console.log(beforeLet);
} catch (error) {
  console.log("let 선언 전 접근 오류:", error.message);
}
let beforeLet = "let은 초기화 전 접근이 불가능합니다.";
console.log("let 선언 후 접근:", beforeLet);

try {
  console.log(beforeConst);
} catch (error) {
  console.log("const 선언 전 접근 오류:", error.message);
}
const beforeConst = "const도 초기화 전 접근이 불가능합니다.";
console.log("const 선언 후 접근:", beforeConst);

console.log("\n=== 11. 왜 var보다 let/const를 더 많이 쓰는가 ===");
console.log("var는 함수 스코프와 호이스팅 특성 때문에 예상하지 못한 동작을 만들기 쉽습니다.");
console.log("let과 const는 블록 스코프라서 범위가 더 명확하고, 실수를 줄이기 좋습니다.");

console.log("\n=== 12. const는 완전히 안 바뀌는가 ===");
console.log("const는 변수 이름에 새로운 값을 다시 대입하지 못하게 합니다.");
console.log("하지만 객체나 배열 내부 내용은 수정할 수 있습니다.");

const fruits = ["apple", "banana"];
fruits.push("orange");
console.log("const 배열 내부 수정:", fruits);

const user = {
  name: "Jisu",
  age: 20
};
user.age = 21;
console.log("const 객체 내부 수정:", user);

try {
  user = { name: "Hana" };
} catch (error) {
  console.log("const 객체 재할당 오류:", error.message);
}

console.log("\n=== 13. 실전에서 권장하는 방식 ===");
console.log("1. 기본은 const를 먼저 사용합니다.");
console.log("2. 값이 바뀌어야 할 때만 let을 사용합니다.");
console.log("3. var는 오래된 예제를 읽을 때 이해하되, 새 코드는 보통 let/const를 사용합니다.");

console.log("\n=== 14. 짧은 실습 문제 ===");
let count = 0;
count += 1;
console.log("let으로 값 변경:", count);

const siteName = "Open Study";
console.log("const로 고정한 값:", siteName);

if (true) {
  const blockMessage = "이 메시지는 블록 안에서만 보입니다.";
  console.log(blockMessage);
}

console.log("\n=== 15. 한 줄 정리 ===");
console.log("var는 함수 스코프, let과 const는 블록 스코프를 가집니다.");
console.log("실무에서는 보통 const를 기본으로 쓰고, 값이 바뀔 때만 let을 사용하는 것이 가장 많이 권장됩니다.");
